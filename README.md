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
  
## Envrionment Setup - identical for Windows and Mac
1. Download and install Node.js, Visual Studio Code (VSCode)
2. Create a new folder for the project and open it in VSCode
3. Open CMD/Terminal and then exectue the following command which creates the package.json file (list of apps for the for it to run):
    ``` npm -i init```
4. To install Cypress, use the following command: 
   ```npm install cypress --save -dev```
5. To start the Cypress launch pad, use: 
   ```npx cypress open``` or ```node_modules/.bin/cypress open```
