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
- Assertions are the validations that are executed in the middle or end of the test cases to evaluate that the actual result is as expected.
  - ```cy.get('locator').contains('value')``` get the DOM element containing the text
  - ```cy.get('locator').should('value')``` creates an assertion

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
- xpath plugin has been deprecated 
  