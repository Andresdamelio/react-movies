import { search } from '../../helpers';

describe('Test search function in movies API', () => {
  test('The search function must return the data correctly.', async () => {
    const { page, results, total_pages, total_results } = await search('es');

    expect(page).toBe(1);
    expect(results.length).toBe(20);
    expect(Number.isInteger(total_pages)).toBe(true);
    expect(Number.isInteger(total_results)).toBe(true);
  });
});
