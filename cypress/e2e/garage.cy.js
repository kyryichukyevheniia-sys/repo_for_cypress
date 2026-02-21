import GaragePage from "../pages/GaragePage";
import ExpensesPage from "../pages/ExpensesPage";

describe("Add car and add fuel expense", () => {
  beforeEach(() => {
    cy.visit("/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });

    cy.login(Cypress.env("userEmail"), Cypress.env("userPassword"));
  });

  it("Add car and add fuel expense", () => {
    GaragePage.openAddCarModal();
    GaragePage.selectBrand("Audi");
    GaragePage.selectModel("TT");
    GaragePage.enterMileage("1000");
    GaragePage.saveCar();

    cy.contains("Audi TT").should("be.visible");

    GaragePage.openFuelExpenses();

    ExpensesPage.openAddExpenseModal();

    ExpensesPage.enterMileage("1200");
    ExpensesPage.enterLiters("20");
    ExpensesPage.enterTotalCost("500");

    ExpensesPage.saveExpense();

    cy.contains("1200").should("be.visible");
    cy.contains("20").should("be.visible");
    cy.contains("500").should("be.visible");
  });
});
