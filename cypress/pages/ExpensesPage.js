class ExpensesPage {
  openAddExpenseModal() {
    cy.get('.modal-backdrop').should('not.exist');

    cy.contains('button', 'Add an expense')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  enterMileage(mileage) {
    cy.get('#addExpenseMileage')
      .should('be.visible')
      .clear()
      .type(mileage)
      .blur();
  }

  enterLiters(liters) {
    cy.get('#addExpenseLiters')
      .should('be.visible')
      .clear()
      .type(liters)
      .blur();
  }

  enterTotalCost(cost) {
    cy.get('#addExpenseTotalCost')
      .should('be.visible')
      .clear()
      .type(cost)
      .blur();
  }

  saveExpense() {
    cy.get('ngb-modal-window')
      .contains('button', 'Add')
      .should('not.be.disabled')
      .click();

    cy.get('ngb-modal-window', { timeout: 10000 }).should('not.exist');
    cy.get('.modal-backdrop', { timeout: 10000 }).should('not.exist');
  }
}

export default new ExpensesPage();
