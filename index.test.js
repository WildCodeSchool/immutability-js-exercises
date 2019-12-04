import setItemQuantity from './1_add_a_property';

describe('1_add_a_property', () => {
  it('set the item quantity', () => {
    const cookies = {
      name: 'cookie',
      category: 'biscuit',
    };
    expect(setItemQuantity(cookies, 5)).toEqual({
      name: 'cookie',
      category: 'biscuit',
      quantity: 5,
    });
  });
  it('does not mutate the parameter', () => {
    const cookies = {
      name: 'cookie',
      category: 'biscuit',
    };
    setItemQuantity(cookies, 5);
    expect(cookies).toEqual({
      name: 'cookie',
      category: 'biscuit',
    });
  });
});
