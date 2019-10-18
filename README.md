This project was bootstrapped with [Create React App 3](https://github.com/facebook/create-react-app).

## Demo site

https://www.netlify.com is simply used for hosting static sites like GitHub pages.
[https://condescending-jones-656c33.netlify.com/](https://condescending-jones-656c33.netlify.com/)

## Node versions

If you are experiencing a difficult to install, please switch to below versions.

|node|8.11.3|
|npm|5.6.0|
|yarn|1.17.3|

## Application Installation

In order to run the application in your local environment,
Please follow below steps.

1. `yarn install`
2. `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the jest test runner<br />
other test related scripts:<br />
#### `npm run test:watch`
#### `npm run test:coverage`
#### `npm run test:update`

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Key files to review

Please check below key files for code review.

```
src/
  App.js
  components/
    modules/
      SeCard/
        SeCard.js
        SeCard.spec.js
        SeCard.style.js
```

## Feedback

I used create-react-app3 to start and finish the project quickly without spending too much time for doing Webpack4 configuration.
Migrating reactjs app from Sass to styled-components seems daunting, but with a couple right tooling, it can work very well.

### Theme

ThemeContext is used for global theme.
Use useContext to access the current theme outside of styled components with React Hooks.

### Unit testing

Obviously used Jest Testing Framework. Simply run `npm test` to test components
I wrote props checking and styles checking cases for testing.
Test must be passed to initialise `npm build`

### improvement

1. styled-components can be much more improved.
2. create-react-app3 can be replaced to webpack4.
3. Storybook5 can be implemented for FE styleguides
4. i18n localisation can be fully done.
