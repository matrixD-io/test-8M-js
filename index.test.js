const load8M = require('./index.js');

describe('load8M', () => {
  it('resolves to a Buffer', async () => {
    const result = await load8M();
    expect(result).toBeInstanceOf(Buffer);
  });
});
