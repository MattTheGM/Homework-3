# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```
AS AN employee with access to sensitive data
    I WANT to randomly generate a password that meets certain criteria
        SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
    WHEN I click the button to generate a password
        THEN I am presented with a series of prompts for password criteria
            // Prompts including whether or not wanting capitalization, special characters, numbers, and length
    WHEN prompted for password criteria
        THEN I select which criteria to include in the password
            // Use confirms for this part for Capitalization, Special characters, and Numbers, prompt for length
    WHEN prompted for the length of the password
        THEN I choose a length of at least 8 characters and no more than 128 characters
            // A check to see if the response is between 8 and 128. If not, do not run code.
    WHEN prompted for character types to include in the password
        THEN I choose lowercase, uppercase, numeric, and/or special characters
            // Again, confirms for all 4
    WHEN I answer each prompt
        THEN my input should be validated and at least one character type should be selected
            // If all answers are false, do not run code either.
    WHEN all prompts are answered
        THEN a password is generated that matches the selected criteria
            // Use various arrays to store the data (lowercase, uppercase, all digits, all special characters) and call random entries from all arrays matching the given criteria
    WHEN the password is generated
        THEN the password is either displayed in an alert or written to the page
            // Written to the page
    In Summation:
        The page should be laid out with responsive headers, divs, and a button. When the button is clicked, 4 confirms and a prompt should be given. If all 4 confirms are false OR if the prompt number is false, display an error message declaring the infraction. If AT LEAST one confirm is true AND the prompt length matches the criteria, generate a password to specified length and criteria by pulling from the associated arrays at random, then writing the response to a div.

    What Codes Can I Pull From:
        * One that has both jQuery and Bootstrap
        * Rock Paper Scissors
        * One of the responsive pages with Bootstrap
        * Writing to Div exercise
        * Maybe local storage?
```

The following image demonstrates the application functionality:

![password generator demo](./Assets/03-javascript-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
