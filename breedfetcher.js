//First attempt: Creating a request function that is going to allow us to retrieve the information
//we want about a cat breed.

const fs = require('fs');

const userSearch = process.argv.slice(2);

const request = require('request');

let breedName = userSearch;

// request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const data = JSON.parse(body);
//   const breed = data[0];
//   if (breed) {
//     console.log(breed.description);
//   } else {
//     console.log("Breed not found");
//   }
// });

//Some notes on what is going on up here:
//We are requesting information from the CAT API. We adjust the URL so that it can bridge together with the
//Breed name that we type in our terminal, and it adds that breedname to the end of the search in the API.
//The error portion is straight forward.
//We then declare a variable called breed and make it equal to the first index of the data array.
//This index holds the body with the information about the cat in an object in index 0.
//Our if statement says IF the breed is truthy, meaning if an objet Exists in that index 0, which it will
//if we search for an actual breed, then will return the description.
//However if you search for a breed that does not exist on the CAT API,
//nothing is foudn which returns an empty array. IF no object sits in index 0 of that array,
//than the breed will return as falsy and we will skip past to the else statement where it states BREED NOT FOUND.

//Attempt 2: We are now going to refractor the code into a function.
//
const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found", null);
    }
  });
};

module.exports = { fetchBreedDescription };