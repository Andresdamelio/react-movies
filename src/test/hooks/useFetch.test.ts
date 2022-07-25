import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../../hooks';
import { Movies } from '../../interfaces';

describe('test custom hook useFetch', () => {
  test('Must return to the initial state', () => {
    const { result } = renderHook(() => useFetch('es'));
    const { data, error, loading } = result.current;

    expect(data).toEqual({});
    expect(error).toBe(null);
    expect(loading).toBe(true);
  });

  test('It should return the films and the loading status as false.', async () => {
    const { result } = renderHook(() => useFetch('es'));

    await waitFor(() => expect(result.current.loading).toBe(false), {
      timeout: 5000
    });

    const { data, error, loading } = result.current;

    expect((data as Movies).results?.length).toBeGreaterThan(0);
    expect(error).toBe(null);
    expect(loading).toBe(false);
  });
});
