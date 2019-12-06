import setItemQuantity from './1_add_a_property';
import addItemToBasket from './2_add_to_an_array';
import setFavorite from './3_update_item_in_array';

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

describe('2_add_to_an_array', () => {
  it('add an item', () => {
    const cookie = {
      name: 'cookie',
      category: 'biscuit',
    };
    const basket = [
      {
        name: 'banana',
        category: 'fruit',
      },
    ];
    expect(addItemToBasket(basket, cookie)).toEqual([
      {
        name: 'banana',
        category: 'fruit',
      },
      {
        name: 'cookie',
        category: 'biscuit',
      },
    ]);
  });
  it('does not mutate the parameter', () => {
    const cookie = {
      name: 'cookie',
      category: 'biscuit',
    };
    const basket = [
      {
        name: 'banana',
        category: 'fruit',
      },
    ];
    addItemToBasket(basket, cookie);
    expect(basket).toEqual([
      {
        name: 'banana',
        category: 'fruit',
      },
    ]);
  });
});

describe('3_update_item_in_array', () => {
  it('set favorite', () => {
    const basket = [
      {
        name: 'banana',
        category: 'fruit',
        favorite: true,
      },
      {
        name: 'cookie',
        category: 'biscuit',
        favorite: false,
      },
    ];
    expect(setFavorite(basket, 'cookie')).toEqual([
      {
        name: 'banana',
        category: 'fruit',
        favorite: false,
      },
      {
        name: 'cookie',
        category: 'biscuit',
        favorite: true,
      },
    ]);
  });
  it('does not mutate the parameter', () => {
    const basket = [
      {
        name: 'banana',
        category: 'fruit',
        favorite: true,
      },
      {
        name: 'cookie',
        category: 'biscuit',
        favorite: false,
      },
    ];

    setFavorite(basket, 'cookie');
    expect(basket).toEqual([
      {
        name: 'banana',
        category: 'fruit',
        favorite: true,
      },
      {
        name: 'cookie',
        category: 'biscuit',
        favorite: false,
      },
    ]);
  });
});
