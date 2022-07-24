import React from 'react';

import { useFetch } from '../hooks';
import { Response } from '../types';

type Props = {
  lang: string;
};

const MoviesList = ({ lang }: Props) => {
  const { data, loading, error }: Response = useFetch(lang);

  if (loading) return <p>Cargando data</p>;

  if (error) return <p>Ha ocurrido un error</p>;

  return (
    <ul>
      {data?.results?.map((movie, index) => (
        <li key={index}>{movie.title}</li>
      ))}
    </ul>
  );
};

export default MoviesList;
