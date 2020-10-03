describe("First test", () => {
  it("should visit login page", () => {
    cy.visit("/login");
    cy.get("[data-cy=register-btn]").click();
    cy.url().should("include", "/register");
  });
});
