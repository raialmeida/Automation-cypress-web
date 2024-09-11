const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter")
const os = require('os')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bugbank.netlify.app',
    video: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      allureCypress(on, {
        environmentInfo: {
          OS: os.platform,
          OsVersion: os.version,
          Architecture: os.arch,
          NodeVersion: process.version,
          UrlAPI: config.baseUrl,
        }
      })
      return config
    },
  },
})
