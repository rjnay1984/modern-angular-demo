it('loads examples', () => {
  cy.visit('/');
  cy.contains('app is running!');
});
