import * as fs from 'fs'; // Make sure your environment supports ES module syntax
import { Convert, ApartmentsResponse, CompellingUnitsByNeighborhood, Listing } from "./types";
// const fs = require('fs')
let one = JSON.parse(fs.readFileSync('1.json', 'utf-8'))
let two = JSON.parse(fs.readFileSync('2.json', 'utf-8'))

// import { Convert, ApartmentsResponse } from "./types";

const apartmentsResponse = Convert.toApartmentsResponse(JSON.stringify(one));
const apartmentsResponse2 = Convert.toApartmentsResponse(JSON.stringify(two));

// console.log(apartmentsResponse.compelling_units_by_neighborhood.length)
// console.log(apartmentsResponse2.compelling_units_by_neighborhood.length)


// Assuming Convert and ApartmentsResponse are correctly set up

// // Read and parse the JSON files
// const one = JSON.parse(fs.readFileSync('1.json', 'utf-8'));
// const two = JSON.parse(fs.readFileSync('2.json', 'utf-8'));

// Combine the compelling_units_by_neighborhood arrays
let combined = [...one.compelling_units_by_neighborhood, ...two.compelling_units_by_neighborhood];

// Deduplicate the combined array based on a unique attribute, assuming 'id' is unique
const uniqueNeighborhoods = Array.from(new Map(combined.map(item => [item.neighborhood_name, item])).values());

// Combine the compelling_units_by_neighborhood arrays
combined = [...one.listings, ...two.listings];

console.log(one.listings == two.listings)

// Deduplicate the combined array based on a unique attribute, assuming 'id' is unique
// const uniqueListings = Array.from(new Map(combined.map(item => [item.neighborhood_name, item])).values());

// Deduplicate the units within each neighborhood
uniqueNeighborhoods.forEach(neighborhood => {
    const uniqueUnits = Array.from(new Map(neighborhood.units.map((unit: any) => [unit.id, unit])).values());
    neighborhood.units = uniqueUnits;
});

// // Deduplicate the units within each neighborhood
// uniqueListings.forEach(neighborhood => {
//     const uniqueUnits = Array.from(new Map(neighborhood.units.map((unit: any) => [unit.id, unit])).values());
//     neighborhood.units = uniqueUnits;
// });

// Deduplicate the listings array based on a unique attribute, assuming 'id' is unique for each listing
const uniqueListings = Array.from(new Map(one.listings.concat(two.listings).map((listing: any) => [listing.id, listing])).values());


// Convert back to the ApartmentsResponse structure if necessary
// This step depends on how you want to use the deduplicated data
const dedupedResponse = Convert.toApartmentsResponse(JSON.stringify({ compelling_units_by_neighborhood: uniqueNeighborhoods, has_more: false, listings: uniqueListings }));

console.log(dedupedResponse.compelling_units_by_neighborhood.length);
console.log(dedupedResponse.listings.length);
// Proceed with dedupedResponse...

let lowestScore = Number.MAX_SAFE_INTEGER;
let highestScore = Number.MIN_SAFE_INTEGER;

for (const neighborhood of apartmentsResponse.compelling_units_by_neighborhood) {
    for (const unit of neighborhood.units) {
        for (const dealStatus of unit.deal_statuses) {

            // unit.deal_statuses[0].deal_score;
            if (dealStatus.deal_score < lowestScore) {
                lowestScore = unit.deal_statuses[0].deal_score;
            }

            if (dealStatus.deal_score > highestScore) {
                highestScore = unit.deal_statuses[0].deal_score;
            }
        }
    }
}
console.log(lowestScore);
console.log(highestScore);

lowestScore = Number.MAX_SAFE_INTEGER;
for (const neighborhood of apartmentsResponse2.compelling_units_by_neighborhood) {
    for (const unit of neighborhood.units) {
        for (const dealStatus of unit.deal_statuses) {

            // unit.deal_statuses[0].deal_score;
            if (dealStatus.deal_score < lowestScore) {
                lowestScore = unit.deal_statuses[0].deal_score;
            }

            if (dealStatus.deal_score > highestScore) {
                highestScore = unit.deal_statuses[0].deal_score;
            }
        }
    }
}
console.log(lowestScore);
console.log(highestScore);