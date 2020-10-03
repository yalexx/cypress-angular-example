describe("Login", () => {
  beforeEach(() => {
    cy.fixture("users").then((users) => {
      localStorage.setItem("users", JSON.stringify(users));
    });
  });

  it("should login user", () => {
    cy.visit("/login");
    cy.get("[data-cy=username]").type(Cypress.config("username"));
    cy.get("[data-cy=password]").type(Cypress.config("password"));
    cy.get("[data-cy=login]").click();

    cy.get("h1").should("contain", "Hi Yanko");
  });
});
