import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    baseUrl: 'https://www.ticketlouvre.fr/louvre/b2c/index.cfm/calendar/eventCode/MusWeb',
    fixturesFolder: "cypress/fixtures",
  },
  env: {
    // setting Network Bandwidth as 20KB
    networkBandwidth: 20
  },
  // Setting video recording on.
  video: true,
});
