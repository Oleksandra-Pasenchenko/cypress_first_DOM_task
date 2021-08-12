
describe(`The page with top 10 countries' population`, () => {
  it('should open', () => {
      cy.visit('https://oleksandra-pasenchenko.github.io/js_get_data_DOM/')
  });

  it('should contain correct number of population for each country', () => {
      cy.contains('[class="list__item"]', 'China').should('contain', '1,439,234,240');
      cy.contains('[class="list__item"]', 'India').should('contain', '1,379,784,212');
      cy.contains('[class="list__item"]', 'USA').should('contain', '330,971,314');
      cy.contains('[class="list__item"]', 'Indonesia').should('contain', '273,476,73');
      cy.contains('[class="list__item"]', 'Pakistan').should('contain', '220,822,025');
      cy.contains('[class="list__item"]', 'Brazil').should('contain', '220,822,025');
      cy.contains('[class="list__item"]', 'Nigeria').should('contain', '220,822,025');
      cy.contains('[class="list__item"]', 'Bangladesh').should('contain', '164,662,809');
      cy.contains('[class="list__item"]', 'Russia').should('contain', '145,933,461');
      cy.contains('[class="list__item"]', 'Mexico').should('contain', '128,910,799');
  });

  it('should contain correct numbers for total population and average population', () => {
      cy.get('.total-population').should('contain', '4,525,439,640');
      cy.get('.average-population').should('contain', '452,543,964');
  });
});