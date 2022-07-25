import MoviesList from '../../src/components/Movies';

describe('Testing component MovieList', () => {
  it('The component is rendered correctly', () => {
    cy.viewport(1280, 700);

    cy.mount(<MoviesList lang='es' />);
    cy.get('[data-testid="list-movies"]').children().should('have.length', 20);
    cy.get('[data-testid="card"]').should('exist').and('have.length', 20);
  });
});
