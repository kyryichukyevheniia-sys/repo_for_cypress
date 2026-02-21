class GaragePage {
  openAddCarModal() {
    // Чекаємо, поки не буде відкритих модалок
    cy.get('body').then(($body) => {
      if ($body.find('ngb-modal-window').length) {
        cy.get('ngb-modal-window', { timeout: 10000 }).should('not.exist');
      }
    });

    cy.get('.modal-backdrop').should('not.exist');

    // Клікаємо кнопку Add car
    cy.contains('button', 'Add car')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  }

  selectBrand(brand) {
    cy.get('#addCarBrand')
      .should('be.visible')
      .select(brand);
  }

  selectModel(model) {
    cy.get('#addCarModel')
      .should('be.visible')
      .select(model);
  }

  enterMileage(mileage) {
    cy.get('#addCarMileage')
      .should('be.visible')
      .clear()
      .type(mileage)
      .blur(); // 🔥 активує Angular validation
  }

  saveCar() {
    cy.get('ngb-modal-window')
      .contains('button', 'Add')
      .should('not.be.disabled')
      .click();

    // Чекаємо закриття модалки
    cy.get('ngb-modal-window', { timeout: 10000 }).should('not.exist');

    // Чекаємо зникнення backdrop
    cy.get('.modal-backdrop', { timeout: 10000 }).should('not.exist');
  }

  openFuelExpenses() {
    cy.contains('Fuel expenses')
      .should('be.visible')
      .click();
  }
}

export default new GaragePage();
