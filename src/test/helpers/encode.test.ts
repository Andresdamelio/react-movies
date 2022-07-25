import { encode } from '../../helpers';

describe('Testing encode function', () => {
  test('The encode function must return a transformed string.', () => {
    const params = {
      language: 'es'
    };

    const query = encode(params);

    expect(query).toContain('language=es');
  });
});
