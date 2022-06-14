// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var results = [];

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      results.push(number);
    }
  });
  return results.length;
};

/*
 *
 *  _.filter
 *
 */


//I - takes in an array of fruits, and a target fruit
//O - returns an array of only one fruit that is the target fruit
//C - cannot create new array
//E - none

//with the filter function, take in fruits, and check if fruit is NOT equal to targetFruit
  //splice at index, at 1
  //otherwise, if fruit is equal to targetFruit && fruits length is NOT equal to 1
    //splice at index, at 1
//return fruits

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  fruits = _.filter(fruits, function(fruit, index, fruits) {
    if (fruit === targetFruit) {
      return true;
    }
  });
  return fruits;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.

//i - takes in an array, and a letter
//0 - return original array with only elements that have the first letter
//c - cannot create a new array, cannot use for loop
//e - none

//use filter function , take in fruits, check if fruit at index 0 is NOT equal to letter
  //splice at index, at i
//return fruits

var startsWith = function(fruits, letter) {
  fruits = _.filter(fruits, function(fruit, index, fruits) {
    if (fruit[0] === letter) {
      return true;
    }
  });
  return fruits;
};

// return a filtered array containing only cookie-type desserts.
//i - takes in a collection
//o - returns a collection that are cookie types
//c - cannot create a new array
//e - none

// desserts var equals filter method, take in desserts, with the function dessert, index, desserts
  //if dessertat type equals cookie
    //return true

var cookiesOnly = function(desserts) {
  desserts = _.filter(desserts, function(dessert, index, desserts) {
    if (dessert.type === 'cookie') {
      return true;
    }
  });
  return desserts;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.

//i - takes in a collection of products
//o - returns the total price of all the products
//c - none
//e - none

//create a price var that equals products at price split at $ and join at ''
//create a total var which equals reduce, taking in products, function adding items to the total
//return total

var sumTotal = function(products) {
  var sum = _.reduce(products, function(accumulator, item) {
    var cleanPrice = Number(item.price.split('$').join(''));
    return accumulator + cleanPrice;
  }, 0);
  return sum;
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }

//i - takes in a an array of objects that are desserts
//o - an object with each key being the dessert 'type', and the value being the total of that type
//c - none
//e - none

//create a tally variable that equals reduce method, takes desserts, iterator which takes in
  //accumulator, dessert, the third argument for reduce is an empty object
    //if accumulator at type equals undefined
      //accumulator at type equals 1
    //otherwise
      //at 1 to accumulator at type
  //return accumulator

var dessertCategories = function(desserts) {
  var dessertTally = _.reduce(desserts, function(accumulator, dessert) {
    if (accumulator[dessert.type] === undefined) {
      accumulator[dessert.type] = 1;
    } else {
      accumulator[dessert.type] += 1;
    }
    return accumulator;
  }, {});
  return dessertTally;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

//i - takes in an array of objects
//o - returns an array of movies with a release year between 1990 and 2000
//c - none
//e - none

//create a ninetiesMovies var that equals reduce, taking in movies, iterator that takes in
  //accumulator, movie, the third argument for reduce is an empty array
  //check if movie at releaseYear is less than 2000 and greater than 1990
    //push movie to the accumulator array
  //return accumulator
//return ninetiesMovies

var ninetiesKid = function(movies) {
  var ninetiesMovies = _.reduce(movies, function(accumulator, movie) {
    if (movie['releaseYear'] > 1990 && movie['releaseYear'] < 2000) {
      accumulator.push(movie.title);
    }
    return accumulator;
  }, []);
  return ninetiesMovies;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.

//i - takes in an array of objects that are movies with runtimes, and a timelimit that is a number
//o - returns true or false if there are any movies with a runtime that is less than the timelimit
//c - none
//e - none

//create a enoughtTime variable that equals reduce method, taking in movie, iterator function taking
  //in accumulator, movie
  //check if movie at runtime is less than or equal to timelimit
    //return true
    //break;
  //otherwise,
    //return false
  //return accumulator
//return enoughTime


var movieNight = function(movies, timeLimit) {
  var haveTime = false;
  var enoughTime = _.reduce(movies, function(accumulator, movie) {
    if (movie.runtime <= timeLimit) {
      haveTime = true;
    }
    return accumulator;
  });
  return haveTime;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.

//i - take in an array of strings
//o - return a new array with all the strings in UpperCase
//c - none
//e - none

//create allCaps variable that equals map method, taking in fruits, and iterator function which
  //takes in fruit
    //use toUpperCase method on fruit
  //return allCaps

var upperCaseFruits = function(fruits) {
  var allCaps = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return allCaps;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.

//i - takes in an array of objects
//o - a new array of objects with a 'glutenFree property with a boolean value
//c - none
//e - none

//create a newGFArray variable that equals map method, taking in desserts, and iterator function
//which takes in dessert
  //dessert at glutenFree equals true
  //with the each method, take in ingredient, index, desserts at ingredients
    //if ingredient strictly equals 'flour'
      //dessert at glutenFree equals false
  //return return dessert
//return newGFArray

var glutenFree = function(desserts) {
  var newGFArray = _.map(desserts, function(dessert) {
    dessert['glutenFree'] = true;
    _.each(dessert.ingredients, function(ingredient, index, collection) {
      if (ingredient === 'flour') {
        dessert['glutenFree'] = false;
      }
    });
    return dessert;
  });
  return newGFArray;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

//i - takes in an array of objects, and a coupon that is a number
//o - returns an array of items with a new property call salePrice, with the new price
//c - none
//e - none

//create a itemsOnSale var that equals map method, taking in groceries, and iterator
//that takes in item
  //create a cleanPrice var that equals Number method to item at price, split at '$' and join at ''
  //create a priceOff that equals cleanPrice times coupon
  //item at salePrice equals '$' plus cleanPrice minus priceOff with to fixed method at 2
  //return item
//return itemsOnSale

var applyCoupon = function(groceries, coupon) {
  var itemsOnSale = _.map(groceries, function(item) {
    var cleanPrice = Number(item.price.split('$').join(''));
    var priceOff = cleanPrice * coupon;
    item['salePrice'] = '$' + Number(cleanPrice - priceOff).toFixed(2);
    return item;
  });
  return itemsOnSale;
};
