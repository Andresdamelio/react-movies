import { Params } from '../interfaces';

export const encode = (params: Params): string => {
  const query = Object.keys(params)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
    )
    .join('&');

  return query;
};
