import * as fs from 'fs';

// Read and parse the JSON files
const one = JSON.parse(fs.readFileSync('1.json', 'utf-8'));
const two = JSON.parse(fs.readFileSync('2.json', 'utf-8'));
const three = JSON.parse(fs.readFileSync('3.json', 'utf-8'));

// Function to find differences in arrays based on a unique identifier (e.g., 'id')
function findDifferences(array1, array2, identifier) {
    const uniqueInOne = array1.filter(item1 => !array2.some(item2 => item2[identifier] === item1[identifier]));
    const uniqueInTwo = array2.filter(item2 => !array1.some(item1 => item1[identifier] === item2[identifier]));
    return { uniqueInOne, uniqueInTwo };
}

// Find differences in compelling_units_by_neighborhood
const neighborhoodsDiff = findDifferences(one.compelling_units_by_neighborhood, two.compelling_units_by_neighborhood, 'neighborhood_name');

// Find differences in listings
const listingsDiff = findDifferences(one.listings, two.listings, 'id');

// Console log the differences
console.log("Unique neighborhoods in the first file:", neighborhoodsDiff.uniqueInOne.map(item => item.neighborhood_name));
console.log("Unique neighborhoods in the second file:", neighborhoodsDiff.uniqueInTwo.map(item => item.neighborhood_name));

console.log("Unique listings in the first file:", listingsDiff.uniqueInOne.map(item => item.id));
console.log("Unique listings in the second file:", listingsDiff.uniqueInTwo.map(item => item.id));

console.log(one.compelling_units_by_neighborhood.reduce((a, c) => a + c.units.length, 0))
console.log(two.compelling_units_by_neighborhood.reduce((a, c) => a + c.units.length, 0))
console.log(three.compelling_units_by_neighborhood.reduce((a, c) => a + c.units.length, 0))
console.log(one.listings.length)
console.log(two.listings.length)
console.log(three.listings.length)