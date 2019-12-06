/*
First read the tests about this function (index.test.js).
If you run the test (npm run test) 
you'll see that the first test is passing 
meaning that function does what we want :
* it adds an item to the array
BUT the second test fails meaning that the original array has been mutated.
* it returns an item with quantity but it should not modify the original item
The reason is that the consts basket and basketWithItem points to the same object in memory

You have to fix this so the function passes both tests
You can get some clues here : https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#Modify_andor_add_property

*/

const addItemToBasket = (basket, item) => {
  const basketWithItem = basket;
  // this line imply a mutation
  basketWithItem.push(item);
  return basketWithItem;
};

export default addItemToBasket;
