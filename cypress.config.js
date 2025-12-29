const { defineConfig } = require('cypress');

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://example.cypress.io/',
		viewportWidth: 1280,
		viewportHeight: 720,
		screenshotsFolder: 'cypress/screenshots',
		videosFolder: 'cypress/videos',
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
});
