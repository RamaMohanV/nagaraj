Feature: Login in to application with background

Background: user needs to launch the browser
Given Open the browser
When enter the url
And user click on the login button
Then enter valid credentials
And click on the submit button
@vanaja
Scenario:validate the dashboard page
Then user able to click on payuser
And user able to click on directory