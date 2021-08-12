
describe(`The page with top 10 countries' population`, () => {
  it('should open', () => {
      cy.visit('https://oleksandra-pasenchenko.github.io/js_get_data_DOM/')
  });

  it('should contain correct number of population for each country', () => {
    cy.get('.list__item').eq(0).should('contain.text', 'China').and('contain.text', '1,439,234,240');
    cy.get('.list__item').eq(1).should('contain.text', 'India').and('contain.text', '1,379,784,212');
    cy.get('.list__item').eq(2).should('contain.text', 'USA').and('contain.text', '330,971,314');
    cy.get('.list__item').eq(3).should('contain.text', 'Indonesia').and('contain.text', '273,476,73');
    cy.get('.list__item').eq(4).should('contain.text', 'Pakistan').and('contain.text', '220,822,025');
    cy.get('.list__item').eq(5).should('contain.text', 'Brazil').and('contain.text', '220,822,025');
    cy.get('.list__item').eq(6).should('contain.text', 'Nigeria').and('contain.text', '220,822,025');
    cy.get('.list__item').eq(7).should('contain.text', 'Bangladesh').and('contain.text', '164,662,809');
    cy.get('.list__item').eq(8).should('contain.text', 'Russia').and('contain.text', '145,933,461');
    cy.get('.list__item').eq(9).should('contain.text', 'Mexico').and('contain.text', '128,910,799');
  });

  it('should contain correct numbers for total population and average population', () => {
    cy.get('.total').and('contain.text', '4,525,439,640');
    cy.get('.average').and('contain.text', '452,543,964');
  });
});