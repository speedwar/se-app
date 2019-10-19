# Styled-components app

This project was bootstrapped with 
[Create React App 3](https://github.com/facebook/create-react-app) and
[Styled components](https://www.styled-components.com).
Styled components is used in place of CSS / SASS.

## Demo site

### Github pages


### Netlify
Netlify is allin-one platform that used for automating frontend web-proejct CI/CD.
[https://condescending-jones-656c33.netlify.com/](https://condescending-jones-656c33.netlify.com/)

## Versioning

### v0.1.0
inital commit

### v0.1.1
Added default header / main / footer styles


## Package managers

Ensure you have **yarn** / **node** / **npm** installed in your local environment.
If you are experiencing a difficulty to install with package manager,
please switch to below versions.

|     |Version |
|-----|--------|
|yarn |1.17.3  |
|node |8.11.3  |
|npm  |5.6.0   |

## Application Installation

In order to run the application in your local environment,
Please follow below steps and must have yarn installed in your local.

1.  `yarn install`
2.  `npm start`
  
## Available Scripts

In the project directory, you can run:

> ### `npm start`

Runs the app in the development mode.
The page will reload if you make edits.
You will also see any lint errors in the console.

> ### `npm test`

Launches the jest test runner

> ### `npm run test:update`

Update exisiting snapshots

> ### `npm build`

Builds the app for production to the `build` folder.<br  />
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.

## Key files to review
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
