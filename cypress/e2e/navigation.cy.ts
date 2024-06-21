describe("home page test", () => {
  it("login form validation", () => {
    cy.visit("");
    cy.getBySel("home-link").should("exist");
    cy.getBySel("overview-link").should("exist");
    cy.getBySel("about-link").should("exist");

    cy.getBySel("home-link").click();
    cy.location("pathname").should("eq", "/");
    cy.getBySel("overview-link").click();
    cy.location("pathname").should("eq", "/overview");
    cy.getBySel("about-link").click();
    cy.location("pathname").should("eq", "/about");
    cy.getBySel("home-link").should("exist");
    cy.getBySel("overview-link").should("exist");
    cy.getBySel("about-link").should("exist");
  });
});
