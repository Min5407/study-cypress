describe("home page test", () => {
  it("login form validation", () => {
    cy.visit("");
    cy.getBySel("login-btn").click();
    cy.getBySel("name-error").should("have.text", "Name is required");
    cy.getBySel("email-error").should("have.text", "Must be a valid email");
    cy.getBySel("name-input").type("test name");
    cy.getBySel("name-input").type("test name");
    cy.getBySel("name-error").should("not.exist");
    cy.getBySel("email-input").type("test@test.com");
    cy.getBySel("email-error").should("not.exist");
    cy.getBySel("login-btn").click();
    cy.location("pathname").should("eq", "/overview");
  });
});
