import { Card } from './style';
import { Movie } from '../../interfaces';
import { imagePath } from '../../helpers';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <Card data-testid='card'>
      <Card.Body>
        <Card.ImageContainer>
          <Card.Image
            src={`${imagePath}${movie.poster_path}`}
            alt={movie.original_title}
            data-testid='image'
          />
        </Card.ImageContainer>
        <Card.Title data-testid='title'>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
