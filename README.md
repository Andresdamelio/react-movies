# Microfrontend React Movies

Project created to expose components as microfrontend using Webpack Module Federation.

## Author

- [twitter: @andres_damelio](https://twitter.com/andres_damelio)
- [webiste: andresdamelio.tech](https://www.andresdamelio.tech)

## Stack

- **Library:** [React](https://es.reactjs.org/)
- **Language:** [Typescript](https://www.typescriptlang.org/)
- **Styles:** [Styled components](https://styled-components.com/)
- **Testing:**
  - [Cypress](https://www.cypress.io/)
  - [Jest](https://jestjs.io/)
  - [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- REACT_APP_API_KEY: API KEY [themoviedb.org](https://themoviedb.org)

## Run Locally

Clone the project

```bash
  git clone https://github.com/andresdamelio/react-movies
```

Go to the project directory

```bash
  cd react-movies
```

Install dependencies

```bash
  npm install
```

Generate build

```bash
  npm run build
```

Start the server

```bash
  npm run start
```

## Running Tests

To run tests, run the following command

Run test components

```bash
  npm run cypress:component
```

Run test e2e

```bash
  npm run cypress:e2e
```

Run test jest

```bash
  npm run test
```
