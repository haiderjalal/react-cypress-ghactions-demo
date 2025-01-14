describe('React App Button Click Test', () => {
  it('should display message when button is clicked', () => {
    cy.visit('http://localhost:3000'); 
    cy.contains('Click Me').click();
    cy.contains('Button clicked!').should('be.visible');
  });

  it('should display message when the second button is clicked', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Click Me Too').click();
    cy.contains('should give an error').should('be.visible');
  });
});
