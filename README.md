This project was bootstrapped with [Create React App 3](https://github.com/facebook/create-react-app).

## Staging site

https://www.netlify.com is simply used for hosting static sites like GitHub pages.
[https://condescending-jones-656c33.netlify.com/](https://condescending-jones-656c33.netlify.com/)

## node versions

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

## Comment about the test

TODO

## TODO list

Webpack4 configuration
postcss setup
Nextjs
