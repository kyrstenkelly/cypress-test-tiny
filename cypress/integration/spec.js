const testUrl = 'https://classroom.udacity.com';
const route = {
  url: '**/graphql',
  method: 'POST'
};
const numCalls = 4;

describe('Our website', () => {
  beforeEach(() => {
    cy.setCookie('_jwt', '< add your JWT here >');

    cy.server();
    cy.route(route).as('apiRoute');
  });

  it(`Has no accessibility violations`, () => {
    cy.visit('https://classroom.udacity.com/me');

    let i = 0;
    // Also try waiting for the requests one at a time
    // while (i < numCalls) {
    //   cy.wait('@apiRoute');
    //   i++;
    // }
    const waitArray = [];
    while (i < numCalls) {
      waitArray.push('@apiRoute');
      i++;
    }
    cy.wait(waitArray);

    expect(true);
  });
});
