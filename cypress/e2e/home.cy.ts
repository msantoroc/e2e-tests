import { Users } from "@/app/home/page";

describe("Home page", () => {
  it("Displays list of users", () => {
    cy.intercept("GET", "https://demo0525754.mockable.io/users").as("getUsers");

    cy.visit("/");
    cy.wait("@getUsers").then((interception) => {
      const users = interception?.response?.body;
      cy.get("h1").should("contain", "Lista de moradores");

      users.forEach((user: Users) => {
        cy.get(`div[id*=${user.id}]`).within(() => {
          cy.get("p").eq(0).should("contain", user.name);
          cy.get("p").eq(1).should("contain", `${user.age} ano(s)`);
        });
      });
    });
  });

  it("Displays black background color on small screens", () => {
    cy.visit("/");
    cy.get("[id*='users-list']").should(
      "have.css",
      "background-color",
      "rgba(0, 0, 0, 0)"
    );

    cy.viewport(320, 568);
    cy.get("div[id*='users-list']").should(
      "have.css",
      "background-color",
      "rgb(0, 0, 0)"
    );
  });

  it("Displays screen title correcty", () => {
    cy.visit("/");
    cy.get("header").should("contain", "Casa Santoro/Souza");
  });

  it("Should navigate to the about page", () => {
    cy.visit("/");
    cy.get('a[href*="about"]').click();

    cy.url().should("include", "/about");
    cy.get("a").contains("Home");
  });
});
