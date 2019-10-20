
# Styled-components app

This project was bootstrapped with [Create React App 3](https://github.com/facebook/create-react-app) and [Styled components](https://www.styled-components.com).
In this project, ***styled-components*** is used in place of CSS / SASS.

## Github pages

>  [https://speedwar.github.io/se-app/](https://speedwar.github.io/se-app/)

## Demo site

**Netlify** is all-in-one platform that used for automating frontend web-proejct CI/CD.
>  [https://condescending-jones-656c33.netlify.com/](https://condescending-jones-656c33.netlify.com/)

## Versioning
### v0.1.0
* FE setup
* Created basic Card component
* Setup Jest configration

### v0.1.1
* removed package-lock.json
* Added default header / main / footer styles
* Added more test cases
* Added new modules styled-media-query / @bootstrap-styled/v4 / @bootstrap-styled/provider

## Package managers

Ensure you have **yarn** / **node** / **npm** installed in your local environment.
If you are experiencing a difficulty to install with package manager,
please switch to below versions.

| |Version |
|-----|--------|
|yarn |1.17.3 |
|node |8.11.3 |
|npm |5.6.0 |

## Application Installation

In order to run the application in your local environment,
Please follow below steps and must have yarn installed in your local.

1. `yarn install`
2. `npm start`

## Available Scripts

In the project directory, you can run:

> `npm start`

Runs the app in the development mode.
The page will reload if you make edits.
You will also see any lint errors in the console.

> `npm test`

Launches the jest test runner

> `npm run test:update`

Update exisiting snapshots
 
> `npm build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Key files to review

```
SeProgram.js
SeProgram.spec.js
SeProgram.style.js
---
SeCard.js
SeCard.spec.js
SeCard.style.js
```

## Comment

I used `create-react-app3` to start and finish this project quickly without spending too much time for doing Webpack4 configuration.
Migrating reactjs app from SASS to styled-components seems daunting, but with a couple right tooling, it can work very well.
Unbelievably **styled-components** works pretty with React Context API. Now I'm starting to love styled-components!

### Theme

Reaect Context API is used for global theme.
Click **Toggle Theme** button to switch theme between light and dark.

### Unit testing

Used Jest Testing Framework. Simply run `npm test` to test components.
run `npm run test:update` to update snapshots.
Test must be passed to initialise `npm build`.

### improvements

- [x] Styled-components improvement with media-query.
- [x] Define all media-query breakpoints.
- [x] Add layout grids.
- [x] Add more test cases.
- [X] Add theme toggler that switches light / dark theme.
- [X] Updating ThemeContext from a Nested Component.
- [ ] Implement styled-components **pxToRem** solution.
- [ ] Replace **create-react-app3** to **Webpack4**.
- [ ] Implement **Storybook5** FE styleguides.
- [ ] Implement i18n localisation.