describe('Check the e11y on index page', () => {
    it('home page is accessible', () => {
      cy.visit('/');
      cy.injectAxe();
      cy.checkA11y();
    });
  });

  export {}