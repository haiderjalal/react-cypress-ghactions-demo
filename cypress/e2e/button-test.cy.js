describe('React App Button Click Test', () => {
  it('should display message when button is clicked', () => {
    cy.visit('http://localhost:3000'); // Adjust the URL if different
    cy.contains('Click Me').click();
    cy.contains('Button clicked!').should('be.visible');
  });
});
