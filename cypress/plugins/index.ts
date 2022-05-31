/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

// eslint-disable-next-line no-unused-vars

module.exports = (on, config) => {
  on("task", {
    "db:seed": () => {
      const seed = require("./seed");
      return seed();
    },
  });
};

export {};
