# Cypress
Learning Cypress for Web App Automation.

## What is Cypress? 
- Front-end web automation testing tool. 
- It is Developed for modern web application (latest Javascript frameworks) like React JS, AngularJS. 
- Cypress allows us to automate any application which runs on browsers (Chrome, Edge, Firefox and Electron). 
- Automation scripts are written in Javascript or in Typescript.
- Open-source but has many components - Cypress Dashboard (Paid) and TestRunner (Free)
- Cypress is built on Node.js and comes with Node Package Manager (npm) modules.
- Cypress is faster compared to Selenium as it runs inside the browser.

## Who can use and what kind of tests can be done in Cypress? 
- Developers and QA Engineers can use it
- Automate end-to-end, integration, unit and API testing. 

## Main features of Cypress
- Time travel - takes snapshot of every run and maintains history
- Debuggability - Cypress has access to all the dev tools since it is running internally on the browser. There is no need to rerun the code as you can immediately cross check the error
- Automated (built-in) waits - automatically waits for the certain element and do the action or page to load
- Consistent Results - no flakiness as you will get the same results no matter how many times you run the test script
- Screenshot and videos - Cypress will automatically capture screenshot and videos if there is an error when 
- Cross browser testing - tests can be run on many browsers either locally or remotely

## Limitations of Cypress
- Cannot automate tests for Desktop or Mobile Apps. 
- Limited broswers - Firefox, Chrome, Chromium.
- Cannot use languages other than Javascript/Typescript.
- Reading/writing data into file is difficult. 
- Third party reporting tool integration is limited.
  
## Environment Setup - identical for Windows and Mac
1. Download and install Node.js, Visual Studio Code (VSCode)
2. Create a new folder for the project and open it in VSCode
3. Open CMD/Terminal and then exectue the following command which creates the package.json file (list of apps for the for it to run):
    ```npm -i init```
4. To install Cypress, use the following command: 
   ```npm install cypress --save -dev```
5. To start the Cypress application, use: 
   ```npx cypress open``` or ```node_modules/.bin/cypress open```

## Writing Tests
- Cypress uses Mocha framework to write the test scripts.

```
describe('TestSuiteName', () => {

    it('Does not do much!, () => {
        expect(true).to.equal(true)
    })
})
```

- ```describe``` is a keyword and can multiple ```it``` blocks
- ```('TestSuiteName'``` is the name of the test suite
- ```() =>``` represents the function which can be also written like ```function ()```
- ```('Does not do much!``` is the test case
- One spec file can have multiple number of test suites/```describe``` block and every ```describe``` block can have multiple ```it``` block.
- ```cy``` is the root module/package where one can access all the commands from Cypress.

## Executing Tests
- ```npx cypress open``` - opens the Cypress application where you can run the spec files.
- ```npx cypress run``` - terminal/cmd command to run all the spec files without launching the Cypress application (headless mode).
- ```npx cypress run --headed``` - terminal/cmd command to run all spec files directly on the browser
- ```npx cypress run --spec pathtofile.cy.js``` - terminal/cmd command to run the specific spec file (headless mode by default)
- ```npx cypress run --browser chrome``` - terminal/cmd command to run all the spec files (headless mode by default)
  
## Locators
- CSS Selectors - supported by Cypress
  - four types of supported CSS Selectors
    - #id 
    - .class
    - [attribute='value']
    - .class [attribute='value']
- XPath - need to install additional plugins
- ```cy.get('locator')```  method will locate the element 
- ```cy.get('locator').type('value')``` this will go to the locator and type in the value provided
- ```cy.get('locator').contains('value')``` get the DOM element containing the text
- xpath plugin has been deprecated 
- able to use Cypress TestRunner to capture the locators

## Assertions
- Assertions are the validations that are executed in the middle or end of the test cases to evaluate that the actual result is as expected.
- In Cypress there are two types of assertions: 
  - Implicit 
    - If an assertion is applicable to the object obtained from the parent command in a chain, it is known as the implicit assertion
    - These commands cannot be used as standalone. Generally, they are used when we have to verify multiple checks on a particular object.
    - ```cy.get('locator').should('value')``` & ```cy.get('locator').should('value').and('value')``` are the popular implicit assertions
    - These are the [keywords](https://docs.cypress.io/guides/references/assertions) you may want to include when doing assertions:
      - eq, contain, include, exist, have.length, have.value -> also have the negative equivalent
  - Explicit
    - If an assertion is applicable to an object directly, it is known as the explicit assertion.
    -  ```cy.get('locator').assert('value')``` (TDD approch) & ```cy.get('locator').expect('value')``` (BDD approach) are the popular explicit assertions
 -  Default 
    - Handled internally and do not require to be invoked specifically.
    - ```cy.visit ()``` − expects the page to show the content with 200 status code
    - ```cy.request ()``` − expects the remote server to be available and sends a response.
    - ```cy.contains ()``` − expects the web element with its properties to be available in DOM.
    - ```cy.get()``` −expects the web element to be available in DOM.
    - ```cy.find ()``` − expects the web element to be available in DOM.
    - ```cy.type ()``` − expects the web element to turn to a type able state.
    - ```cy.click ()``` − expects the web element to turn to a clickable state.
    - ```cy.its ()``` − expects for a web element property on the existing subject.

## Folder Structure
- **downloads** - all downloaded files are stored here
- **e2e** - store all spec/test case files
- **fixures** - maintain static test data here
- **screenshots** - stores captured ** through automation
- **support** - contains all the reusable scripts
  - commands.js - store/create custom commands and override the current commands
  - e2e.js - code that loads before executing the spec files
- **videos**
  - recorded videos of the test cases are stored here
- **node_modules** - contains all cypress related modules
- **cypress.config.js** - cypress config file
- **package.json** - contains the dependencies