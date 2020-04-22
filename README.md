# 03 JavaScript: Password Generator

Create an application that generates a random password based on user-selected criteria. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes.

If you are unfamiliar with special characters, take a look at [some examples](https://www.owasp.org/index.php/Password_special_characters).

## User Story

```

The completed homework is a webpage that is laid out with responsive HTML elements using Bootstrap and uses JavaScript to generate a password based on criteria inputted by the user via prompts and confirms once theyh click on the 'Generate Password' button. 

The script starts by logging the variables for the 4 given criteria as either 'true' or 'false', and the length as a numerical integer. If either all 4 criteria are false OR the password length doesn't fit the requested length (8 to 128), no password is generated and the user receives an alert detailing their mistake.

Provided at least one criteria is true and the password is between 8 and 128 characters, the password generation will begin. I set out to do this by creating strings containing all the possible values for each given criteria, but I found it difficult to translate that intent into a presentable solution, so I scrapped it. Instead, I implemented functions that generate a random character within the scope of their criteria, and present an individual result as a return. Then, I intialized the object randomPass to contain keys that are directed to each individual function. The approach I pursued would later store the results of the confirms into an object array as the result of a function, and by using matching keys in the function arguments and the randomPass keys, I was able to call upon them in a 1-to-1 equivalence based on which criteria were true.

Finally, the script evaluates which values are true for criteria, and then appends an empty result string with a random selection of characters from the given criteria. Once that is done, the unkempt string is then sliced down to size, and returned all the way up, so that it may be displayed into the div.

- - -

