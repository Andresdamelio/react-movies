import movie from '../fixtures/movie.json';
import { Movie } from '../../src/interfaces';
import MovieCard from '../../src/components/MovieCard';

describe('MovieCard.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<MovieCard movie={movie as Movie} />);
    cy.get('[data-testid="title"]')
      .contains('Jurassic World: Dominion')
      .should('exist');

    cy.get('[data-testid="image"]').should(
      'have.attr',
      'src',
      'https://image.tmdb.org/t/p/w300/sXeWfpT1EhG7f4uBouqraOhmouH.jpg'
    );
  });
});
