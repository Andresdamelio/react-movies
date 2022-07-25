import { Movie } from '../../interfaces';

import { Body, Container, Image, ImageContainer, Title } from './style';

type Props = {
  movie: Movie;
};

const imagePath = 'https://image.tmdb.org/t/p/w300';

const MovieCard = ({ movie }: Props) => {
  return (
    <Container>
      <Body>
        <ImageContainer>
          <Image
            src={`${imagePath}${movie.poster_path}`}
            alt={movie.original_title}
          />
        </ImageContainer>
        <Title>{movie.title}</Title>
      </Body>
    </Container>
  );
};

export default MovieCard;
