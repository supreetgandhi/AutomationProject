Feature: Verifying d3a application page

Scenario: Validate that precreated user is able to login
    Given User opens d3a application page
    Then User see "D3A" in the title
    When User enter email as "supreetsinghgandhi@gmail.com"
    And User enter password as "P@ssw0rd1"
    And User click on login button
    Then User lands on home page with header "Home"

Scenario: Validate that precreated user can create a project
    Given User opens d3a application page
    Then User see "D3A" in the title
    When User enter email as "supreetsinghgandhi@gmail.com"
    And User enter password as "P@ssw0rd1"
    And User click on login button
    Then User lands on home page with header "Home"
    When User clicks on the project icon on the home page
    Then User lands on the project page with header "Projects"
    When User clicks on new project button
    And User sees the pop-up to create new project
    And User enter name of project as "Demo Project"
    And Description as "This is a demo project"
    And click on add button
    Then The project gets added to the list with heading as "Demo Project" and description as "This is a demo project"