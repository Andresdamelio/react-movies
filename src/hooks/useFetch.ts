import { useState, useEffect } from 'react';

import { search } from '../helpers';

export const useFetch = (lang: string) => {
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: null
  });

  useEffect(() => {
    search(lang)
      .then((data) => {
        setState({
          data,
          loading: false,
          error: null
        });
      })
      .catch((error) => {
        setState({
          data: {},
          loading: false,
          error
        });
      });

    return () => {
      setState({
        data: [],
        loading: true,
        error: null
      });
    };
  }, [lang]);

  return state;
};
