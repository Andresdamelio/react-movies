import { Params } from '../types';
import { encode } from './encode';

const URL_BASE = 'https://api.themoviedb.org/3';

export const search = async (lang: string) => {
  try {
    let paramsDefault: Params = {
      api_key: process.env.REACT_APP_API_KEY as string
    };

    if (lang) {
      paramsDefault = { ...paramsDefault, language: lang };
    }

    const query = encode(paramsDefault);
    const url = `${URL_BASE}/movie/popular?${query}`;

    const respose = await fetch(url);
    const data = await respose.json();

    return data;
  } catch (error) {
    return error;
  }
};
