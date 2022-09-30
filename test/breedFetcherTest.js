// breedFetcherTest.js

const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);//Checking if error here is equal to null, cause there is no error. Indeed! 

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());//Add trim here to remove any extra space from beginning and end! 

      done();
    });
  });

  it('returns breed not found if an invalid cat breed is inserted, via callback', (done) => {
    fetchBreedDescription('ghost', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, "Breed not found");

      const expectedDescofBreed = null;//There will be no description because no breed is found! 

      // compare returned description
      assert.equal(expectedDescofBreed, desc);//The desc is what the API returns, it returns nothing for ghost or (null)

      done();
    });
  });
});