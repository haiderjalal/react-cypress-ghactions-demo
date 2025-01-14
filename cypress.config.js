const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});


// cypress.config.js
module.exports = {
  e2e: {
    defaultCommandTimeout: 20000, // Set default command timeout to 10 seconds
    pageLoadTimeout: 60000,       // Set page load timeout to 60 seconds
  },
};