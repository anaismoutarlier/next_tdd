describe("Signup page display & navigation", () => {
  it("Signup page displays form correctly", () => {
    cy.visit("http://localhost:3000/signup");
    cy.get("#main")
      .should("be.visible")
      .within(() => {
        cy.get("form#signup")
          .should("be.visible")
          .within(() => {
            cy.get("input").should("have.length", 4);
            cy.get("button[type='submit']")
              .should("be.visible")
              .should("contain.text", "Submit")
              .should("be.disabled");
          });
      });
  });

  it("User with correct information is signed in and lands on success page", () => {
    const user = {
      username: "jamesbond",
      email: "j.bond@mi5.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecurepassword",
    };
    cy.visit("http://localhost:3000/signup");
    for (const key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled");
    cy.get("form#signup button[type='submit']").click();
    cy.url().should("include", "/signup/success");
    cy.get("#signup-success")
      .should("be.visible")
      .should("contain.text", "Congratulations");
  });

  it("User with incorrect information lands on failure page", () => {
    const user = {
      username: "jamesbond",
      email: "j.bond@mi5.uk",
      password: "supersecurepassword",
      confirmPassword: "supersecupassword",
    };
    cy.visit("http://localhost:3000/signup");
    for (const key in user) cy.get(`input[name='${key}']`).type(user[key]);
    cy.get("form#signup button[type='submit']").should("be.enabled");
    cy.get("form#signup button[type='submit']").click();

    cy.url().should("include", "/signup/failure");
    cy.get("#signup-failure")
      .should("be.visible")
      .should("contain.text", "An error occurred");
  });
});
