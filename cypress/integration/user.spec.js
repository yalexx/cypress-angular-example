const { createYield } = require("typescript");

describe("User", () => {
  it("should register user", () => {
    cy.visit("/register");
    cy.get("[data-cy=first-name]").type("Yanko");
    cy.get("[data-cy=last-name]").type("Aleksandrov");
    cy.get("[data-cy=user-name]").type(Cypress.config("username"));
    cy.get("[data-cy=password]").type(Cypress.config("password"));
    // cy.get("[data-cy=password]").type("123456A@{enter}");
    cy.get("[data-cy=register-btn]").click();
    cy.url().should("include", "/login");
    cy.get(".alert").should("contain", "successful");
  });
});
