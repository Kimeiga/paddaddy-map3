
import axios from 'axios';
import fs from 'fs';

// Load listings data
const data = JSON.parse(fs.readFileSync('./allNeighborhoodsData.json', 'utf8'));
console.log(data)
const API_KEY = 'AIzaSyCJKapYkEXB-jHM5htvhdCbuYG40haS0Cc';  // Place your API key here
const results = {};

async function getCommuteTime(listingId, origin) {
    const destination = 'Flatiron Building, New York, NY';
    const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&mode=transit&key=${API_KEY}`;

    try {
        const response = await axios.get(url);
        const duration = response.data.routes[0]?.legs[0]?.duration?.text;
        const durationValue = response.data.routes[0].legs[0].duration.value;

        // const minDuration = Math.min(...data.routes.map(route => route.legs[0].duration.value));

        return durationValue;  // Returns commute time as a string, e.g., '26 mins'
    } catch (error) {
        console.error(`Failed to get commute time for listing ${listingId}:`, error);
        return null;
    }
}

async function main() {
    for (let neighborhood of data) {
        for (let listing of neighborhood.units) {
            console.log(neighborhood.neighborhood_name)
            const commuteTime = await getCommuteTime(listing.id, `${listing.unit_name}, New York, NY`);  // Assuming each listing has an 'address' field
            if (commuteTime) {
                results[listing.id] = commuteTime;
            }
        }
    }

    fs.writeFileSync('commuteTimes2.json', JSON.stringify(results, null, 2));
}

main();
