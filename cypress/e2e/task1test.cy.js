describe('Find all buttons from header', () => {
	beforeEach(() => {
		cy.visit('https://qauto.forstudy.space/', { auth: { username: 'guest', password: 'welcome2qauto' } });
	});
	it('Checking hero-section button', () => {
		cy.get('.btn-primary').should('be.visible');
	});
	it('Checking url link', () => {
		cy.scrollTo('bottom');
		cy.get('.display-4').should('contain', 'ithillel.ua');
	});
});
