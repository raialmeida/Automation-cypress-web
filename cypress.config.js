const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    env: {
      omitFiltered: true,
      filterSpecs: true
    },
    baseUrl: 'https://bugbank.netlify.app',
    video: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config)
      return config
    },
  },
});
