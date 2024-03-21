describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");
    cy.get('a[href*="about"]').click();

    cy.url().should("include", "/about");
    cy.get("a").contains("Home");
  });

  it("should navigate to the home page", () => {
    cy.visit("/about");
    cy.get('a[href*="/"]').click();

    cy.url().should("include", "/");
    cy.get("a").contains("Sobre");
  });
});
