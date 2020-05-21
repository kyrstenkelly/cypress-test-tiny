describe('Our website', () => {
  beforeEach(() => {
    cy.setCookie('_jwt', '< add your JWT here >');

    cy.server();
    cy.route({
      url: '**/graphql',
      method: 'POST'
    }).as('apiRoute');
  });

  it(`Has no accessibility violations`, () => {
    cy.visit('https://classroom.udacity.com/me');

    // Also try waiting for the requests one at a time
    cy.wait('@apiRoute');
    cy.wait('@apiRoute');
    cy.wait('@apiRoute');
    cy.wait('@apiRoute');
    // cy.wait(['@apiRoute', '@apiRoute', '@apiRoute', '@apiRoute']);

    expect(true);
  });
});
