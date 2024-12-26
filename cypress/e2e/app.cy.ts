describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to different pages', () => {
    cy.url().should('include', '/');
    cy.contains('h3', 'Home Pages');
    cy.contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('h3', 'About Pages');
  });

  it('should show 404 page for unknown routes', () => {
    cy.visit('/wrongpath');
    cy.contains('Error:( Page not Found');
  });
});