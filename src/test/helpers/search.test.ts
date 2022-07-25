import { search } from '../../helpers';

describe('Test search function in movies API', () => {
  test('Testing that the search function works', async () => {
    const { page, results, total_pages, total_results } = await search('es');

    expect(page).toBe(1);
    expect(results.length).toBe(20);
    expect(Number.isInteger(total_pages)).toBe(true);
    expect(Number.isInteger(total_results)).toBe(true);
  });
});
