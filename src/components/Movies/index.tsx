import { nanoid } from 'nanoid';

import { useFetch } from '../../hooks';
import MovieCard from '../MovieCard';
import { Params, Response } from '../../interfaces';

import { Container } from './style';
import Loader from './Loader';

const MoviesList = ({ lang }: Params) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <Loader data-testid='list-loader' />;

  if (error)
    return <p>Ha ocurrido un error al cargar el listado de peliculas</p>;

  return (
    <Container data-testid='list-movies'>
      {data?.results?.map((movie) => (
        <MovieCard key={nanoid()} movie={movie} />
      ))}
    </Container>
  );
};

export default MoviesList;
