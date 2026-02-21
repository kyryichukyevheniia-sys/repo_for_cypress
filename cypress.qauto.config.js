const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    baseUrl: "https://qauto.forstudy.space/",
    setupNodeEvents(on, config) {
      return config;
    },
  },
  env: {
    userEmail: "qauto_user1@gmail.com",
    userPassword: "Password1",
  },
});
