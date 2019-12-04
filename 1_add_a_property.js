/*
First read the tests about this function (index.test.js).
If you run the test (npm run test) 
you'll see that the first test is passing 
meaning that function does what we want :
* it returns an item with a quantity property
BUT the second test fails meaning that the original item has been mutated.
* it returns an item with quantity but it should not modify the original item
The reason is that the consts item an itemWithQuantity points to the same object in memory

You have to fix this so the function passes both tests
You can get some clues here : https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#Modify_andor_add_property

*/

const setItemQuantity = (item, quantity) => {
  const itemWithQuantity = item;
  itemWithQuantity.quantity = quantity;
  return itemWithQuantity;
};

export default setItemQuantity;
