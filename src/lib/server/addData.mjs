import axios from 'axios';
import fs from 'fs';

// Load listings data
const data = JSON.parse(fs.readFileSync('./allNeighborhoodsData.json', 'utf8'));
const API_KEY = 'AIzaSyCJKapYkEXB-jHM5htvhdCbuYG40haS0Cc';  // Place your API key here
const GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}`;

async function getCommuteDetails(listingId, origin) {
    const destination = 'Flatiron Building, New York, NY';
    const directionsUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=transit&key=${API_KEY}`;

    try {
        const directionsResponse = await axios.get(directionsUrl);
        if (directionsResponse.data.status === 'OK') {
            const route = directionsResponse.data.routes[0];
            return route; // Returns the entire first route object
        } else {
            console.error(`Directions API request failed for listing ${listingId}: ${directionsResponse.data.status}`);
            return null;
        }
    } catch (error) {
        console.error(`Failed to get commute details for listing ${listingId}:`, error);
        return null;
    }
}

async function getLocation(address) {
    try {
        const geocodeResponse = await axios.get(`${GEOCODING_URL}&address=${encodeURIComponent(address)}`);
        if (geocodeResponse.data.status === 'OK') {
            const location = geocodeResponse.data.results[0].geometry.location; // Gets the lat and lng
            return location;
        } else {
            console.error(`Geocode API request failed for address ${address}: ${geocodeResponse.data.status}`);
            return null;
        }
    } catch (error) {
        console.error(`Failed to get location for address ${address}:`, error);
        return null;
    }
}

async function main() {
    for (let neighborhood of data) {
        for (let listing of neighborhood.units) {
            const fullAddress = `${listing.unit_name}, New York, NY`;
            console.log(`Processing ${fullAddress}`);

            // Fetch and add location data
            const location = await getLocation(fullAddress);
            if (location) {
                listing.location = location;
            }

            // Fetch and add commute details
            const commuteDetails = await getCommuteDetails(listing.id, fullAddress);
            if (commuteDetails) {
                listing.commute_obj = commuteDetails;
            }
        }
    }

    fs.writeFileSync('allNeighborhoodsDataUpdated.json', JSON.stringify(data, null, 2));
}

main();
