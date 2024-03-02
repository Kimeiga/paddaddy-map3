import allNeighborhoodsDataUpdated from '$lib/server/allNeighborhoodsDataUpdated.json' with { type: 'json' };
// import { Convert } from '$lib/server/types';
import type { Apartments } from '$lib/server/types'; // Import your type

export async function load({ params }) {
    // Assuming Convert.toApartments is a method that converts your JSON to the Apartments[] type,
    // you can apply it directly if it's designed to handle this. If not, you'll need to ensure
    // that allNeighborhoodsDataUpdated fits the Apartments[] type structure.
    const apartments: Apartments[] = allNeighborhoodsDataUpdated as Apartments[];

    return { neighborhoods: apartments };
}
