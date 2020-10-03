# angular-7-registration-login-example

Angular 7 User Registration and Login Example with Webpack 4

Full tutorial with example available at http://jasonwatmore.com/post/2018/10/29/angular-7-user-registration-and-login-example-tutorial

# Cypress Tutorial

https://medium.com/angular-in-depth/get-started-with-cypress-d6ac4b910605

## Install cypress

npm i cypress -D

## Open Cypress

npx cypress open

## concurrently

npm i concurrently -D

## cypress comand in package.json

"cypress": "concurrently \"ng serve\" \"cypress open\""

## Best practice

Best Practice: Use data-\* attributes to provide context to your selectors and isolate them from CSS or JS changes.

<button data-cy="submit">Click<button>

## headless cypress

npx cypress run
