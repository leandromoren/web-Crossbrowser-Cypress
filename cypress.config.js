const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern:['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    setupNodeEvents(on, config){},
    baseUrl:'https://crossbrowsertesting.github.io'
  },
});
