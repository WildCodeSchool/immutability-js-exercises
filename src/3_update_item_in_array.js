/*
First read the tests about this function (index.test.js).
If you run the test (npm run test) 
you'll see that the first test is passing 
meaning that function does what we want :
* it updates an item in the array
BUT the second test fails meaning that the original array has been mutated.
* it updates an item in the array but it should not modify the original array
The reason is that even when you are using map you should be careful to not mutate parameter in the map callback.
You have to fix this so the function passes both tests
You can get some clues here : https://ultimatecourses.com/blog/all-about-immutable-arrays-and-objects-in-javascript#Modify_andor_add_property

*/

const setFavorite = (basket, favoriteName) => {
  return basket.map(item => {
    const itemWithFavorite = item;
    // this line implies mutation
    itemWithFavorite.favorite = item.name === favoriteName;
    return itemWithFavorite;
  });
};

export default setFavorite;
