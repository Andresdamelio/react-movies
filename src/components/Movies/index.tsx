import { nanoid } from 'nanoid';

import { useFetch } from '../../hooks';
import MovieCard from '../MovieCard';
import { Params, Response } from '../../interfaces';

import { ListContainer } from './style';
import Loader from './Loader';

const MoviesList = ({ lang }: Params) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <Loader />;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
    <ListContainer>
      {data?.results?.map((movie) => (
        <MovieCard key={nanoid()} movie={movie} />
      ))}
    </ListContainer>
  );
};

export default MoviesList;
