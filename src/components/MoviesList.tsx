import { nanoid } from 'nanoid';

import { useFetch } from '../hooks';
import { Params, Response } from '../interfaces';
import MovieCard from './MovieCard';

const MoviesList = ({ lang }: Params) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <p>Cargando data</p>;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
    <div>
      {data?.results?.map((movie) => (
        <MovieCard key={nanoid()} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
