import { encode } from '../../helpers';

describe('Testing encode function', () => {
  test('encode', () => {
    const params = {
      language: 'es'
    };

    const query = encode(params);

    expect(query).toContain('language=es');
  });
});
