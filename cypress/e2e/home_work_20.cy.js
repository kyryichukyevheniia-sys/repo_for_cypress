describe("Registration flow", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.contains("Sign up").click();
  });

  it("Check all fields are visible", () => {
    cy.get("#signupName").should("be.visible");
    cy.get("#signupLastName").should("be.visible");
    cy.get("#signupEmail").should("be.visible");
    cy.get("#signupPassword").should("be.visible");
    cy.get("#signupRepeatPassword").should("be.visible");
    cy.contains("Register").should("be.disabled");
  });

  it("Validation for empty Name field", () => {
    cy.get("#signupName").focus().blur();
    cy.contains("Name required").should("be.visible");
  });

  it("Validation for wrong Email format", () => {
    cy.get("#signupEmail").type("invalidEmail");
    cy.get("#signupEmail").blur();
    cy.contains("Email is incorrect").should("be.visible");
  });

  it("Validation for weak Password", () => {
    cy.get("#signupPassword").type("123", { sensitive: true }).blur();

    cy.contains(
      "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
    ).should("be.visible");
  });

  it("Validation when passwords do not match", () => {
    cy.get("#signupPassword").type("Password1", { sensitive: true });
    cy.get("#signupRepeatPassword").type("Password2", { sensitive: true });
    cy.get("#signupRepeatPassword").blur();

    cy.contains("Passwords do not match").should("be.visible");
  });

  it("Successful registration", () => {
    const email = `test${Date.now()}@gmail.com`;

    cy.get("#signupName").type("John");
    cy.get("#signupLastName").type("Doe");
    cy.get("#signupEmail").type(email);
    cy.get("#signupPassword").type("Password1", { sensitive: true });
    cy.get("#signupRepeatPassword").type("Password1", { sensitive: true });

    cy.contains("Register").click();

    cy.url().should("include", "garage");
  });

  it("Login using custom command", () => {
    const email = `test${Date.now()}@gmail.com`;
    const password = "Password1";

    cy.get("#signupName").type("John");
    cy.get("#signupLastName").type("Doe");
    cy.get("#signupEmail").type(email);
    cy.get("#signupPassword").type(password, { sensitive: true });
    cy.get("#signupRepeatPassword").type(password, { sensitive: true });

    cy.contains("Register").click();
    cy.url().should("include", "/panel/garage");

    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.login(email, password);

    cy.url().should("include", "/panel/garage");
  });
});
