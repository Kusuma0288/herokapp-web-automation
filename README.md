# Project Title

 Create an automated regression test suite for the Acceptance Criteria: I want to verify the covid-19 game challenge

## Tools/Frameworks used

● Selenium is used along with cucumber BDD framework to complete this task.

### Framework Details

● I have used page object model and updated all application related objects in the java class PageObjects.Java which is located inside the package stepdefinition. Usually I will create multiple classes one for each page, but since the task is simple I have updated all the page objects in the same PageObjects.Java class.

● I have provided all the test data in the ObjectRepository.properties file such that test data maintainence will be easy to whoever wants to modify the test data. ● I have maintained the scenario in the feature file(CovidGame.feature) using gherkin language/cucubmber framework. The file is located at Feature/CovidGamet.feature file and respective implementation for this scenarios is provided in the CovidGame.Java file which is located in stepdefinition package. ● Scenarios to be executed will be provided in the TestRunner.Java class using the tags attribute as tags= {"@REGRESSION"} to execute all scenarios in the Feature files which are marked as @REGRESSION. ● Once the testcase is executed results can be viewed at test-output/index.html file ● All the dependencies are provided in the pom.xml file

#### Prerequisites

I assume following software's are installed on the machine where this project will be executed.

● Java 1.8(Path and Class path configured)

##### Running the tests

● Open Intellij and Right click on the CovidGame.feature and click on Run

● Program execution will be started and wait till the execution is completed.

● Naviate to /test-output/index.html page to view the results.

Note: I couldn't complete implementation of the regression suite as the site was down a couple of times.

##### Improvements:

Update my library and use the latest Cucumber
Use Java Refllection API to store the question-answer data and retrieve while executing the tests to verify the right answer
Use the properties of the timer instead of sleep
