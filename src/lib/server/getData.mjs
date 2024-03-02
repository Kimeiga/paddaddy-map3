import axios from 'axios';
import fs from 'fs';
import { setTimeout } from 'timers/promises'; // Available from Node.js v15.0.0

// Define the neighborhoods array
const neighborhoods = [
    "chelsea",
    "chinatown",
    "east-harlem",
    "east-village",
    "financial-district",
    "flatiron",
    "gramercy-park",
    "greenwich-village",
    "hells-kitchen",
    "lincoln-square",
    "little-italy",
    "les",
    "midtown",
    "midtown-east",
    "midtown-south",
    "midtown-west",
    "morningside",
    "soho",
    "tribeca",
    "upper-east-side",
    "upper-west-side",
    "west-harlem",
    "west-village"
];

const baseUrl = "https://offermate.app/compelling_units";
const queryParams = "bedrooms=0&baths=1&min_price=0&max_price=4000&dist_to_subway=10&dist_to_good_park=10&min_sqft=0&max_sqft=1000000&fee_status=&deal_status=bad&mentions=&must_allow_pets=false&order_by=deal_status&offset=0";

async function fetchApartmentsForNeighborhoods(neighborhoods) {
    const allData = [];

    for (const neighborhood of neighborhoods) {
        const url = `${baseUrl}?neighborhoods=${neighborhood}&${queryParams}`;
        try {
            const response = await axios.get(url);
            allData.push(...response.data.compelling_units_by_neighborhood); // Spread syntax to flatten array
            console.log(`Fetched data for ${neighborhood}`);
        } catch (error) {
            console.error(`Error fetching data for ${neighborhood}: ${error}`);
        }
        await setTimeout(100); // Wait for 0.1 second
    }

    return allData;
}

fetchApartmentsForNeighborhoods(neighborhoods).then(allData => {
    fs.writeFileSync('allNeighborhoodsData.json', JSON.stringify(allData, null, 2), 'utf-8');
    console.log('All data has been written to allNeighborhoodsData.json');
});
