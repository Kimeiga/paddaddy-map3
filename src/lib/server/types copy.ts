// To parse this data:
//
//   import { Convert, ApartmentsResponse } from "./file";
//
//   const apartmentsResponse = Convert.toApartmentsResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface ApartmentsResponse {
    compelling_units_by_neighborhood: CompellingUnitsByNeighborhood[];
    has_more: boolean;
    listings: Listing[];
}

export interface CompellingUnitsByNeighborhood {
    neighborhood_url: string;
    neighborhood_name: string;
    units: Listing[];
}

export interface Listing {
    id: string;
    bathrooms: number;
    neighborhood_display_name: string;
    distance_to_good_park_miles: number | null;
    bldg_complaints_per_unit: null;
    extra_data: ListingExtraData;
    url: string;
    rooms: number;
    is_available: boolean;
    estimated_size: null;
    bldg_bedbug_reports_last_year: number;
    unit_name: string;
    square_footage: number | null;
    amenities_list: string;
    building_url: string;
    unavailable_date: null;
    neighborhood_search_url: string;
    price_per_square_foot_dollars: number | null;
    info: Info;
    bldg_complaints_last_year: number;
    availability_date: Date;
    listed_neighborhood_url: string;
    popularity: number;
    created_at: Date;
    bldg_complaints_last_five_years: number;
    status: string;
    monthly_price_dollars: number;
    description: string;
    updated_at: Date;
    units_in_bldg: number | null;
    description_summary: string;
    has_fee: boolean;
    listing_type: ListingType;
    unit_listing_date: Date;
    bldg_built_year: null;
    alternate_url: string;
    bedrooms: number;
    distance_to_subway_miles: number;
    update_failure_count: number;
    deal_statuses: DealStatusElement[];
    notes: Note[];
    report_card_pieces: ReportCardPiece[];
}

export interface DealStatusElement {
    listing_id: string;
    id: string;
    deal_status: DealStatusEnum;
    listing_model_estimated_price_dollars: number;
    deal_score: number;
    num_units_compared_against: number;
    created_at: Date;
    execution_id: string;
    deal_status_rank: number;
    listing_actual_price_with_fees_dollars: number;
    context: Context;
    num_units_with_square_footage_compared_against: number;
}

export enum Context {
    Neighborhood = "neighborhood",
}

export enum DealStatusEnum {
    Fine = "fine",
    Good = "good",
    Great = "great",
}

export interface ListingExtraData {
    amenities_corrections: AmenitiesCorrection[];
}

export interface AmenitiesCorrection {
    amenity: Amenity;
    reason: Reason;
}

export enum Amenity {
    Dishwasher = "Dishwasher",
    Elevator = "Elevator",
    Laundry = "Laundry",
}

export enum Reason {
    AnotherUnitInTheBuildingClaimsToHaveAnElevator = "Another unit in the building claims to have an elevator.",
    BuildingHasAtLeast7Stories = "Building has at least 7 stories.",
    DescriptionImpliesDishwasherIsPresent = "Description implies dishwasher is present.",
    DescriptionImpliesElevatorIsPresent = "Description implies elevator is present.",
    DescriptionImpliesWasherDryerIsPresent = "Description implies washer/dryer is present.",
    The75OfOtherUnitsInTheBuildingHaveADishwasher = "75+% of other units in the building have a dishwasher.",
}

export interface Info {
    url: string;
    updated_at: number;
    neighborhood_search_url: string;
    unit_name: string;
    building_link: string;
    images: { [key: string]: null | string }[];
    price_str: string;
    details: string[];
    has_fee: HasFee;
    popularity: string;
    vitals_titles: VitalsTitle[];
    vitals_data: string[];
    amenities_highlights: AmenitiesHighlight[];
    other_amenities: string[];
    similar_listings_links: string[];
    listing_agents_name: any[];
    listing_agents_links: any[];
    status: string;
    description: string;
    subway_stations: SubwayStation[];
    listing_type: ListingType;
    neighborhood: string;
    listed_neighborhood_url: string;
    nearby_data: NearbyDatum[];
    price_history: PriceHistory[];
    alternate_link: string;
}

export enum AmenitiesHighlight {
    CatsAndDogsAllowed = "Cats and Dogs Allowed",
    CatsOnlyNoDogs = "Cats Only - No Dogs",
    Dishwasher = "Dishwasher",
    Doorman = "Doorman",
    Elevator = "Elevator",
    FullTimeDoorman = "Full-time Doorman",
    PetsAllowed = "Pets Allowed",
    PrivateOutdoorSpace = "Private Outdoor Space",
    WasherDryerInUnit = "Washer / Dryer in Unit",
}

export enum HasFee {
    Empty = "",
    NoFee = "NO FEE",
}

export enum ListingType {
    CoOp = "Co-op",
    Condo = "Condo",
    RentalUnit = "Rental Unit",
}

export interface NearbyDatum {
    title: Title;
    points_of_interest: PointsOfInterest[];
}

export interface PointsOfInterest {
    name: string;
    distance: string;
}

export enum Title {
    Colleges = "Colleges",
    Museums = "Museums",
    Parks = "Parks",
    Schools = "Schools",
}

export interface PriceHistory {
    price_changed_event: string[];
}

export interface SubwayStation {
    routes: string[];
    distance: string;
    station_name: string;
}

export enum VitalsTitle {
    AvailableOn = "Available on",
    DaysOnMarket = "Days On Market",
    LastPriceChange = "Last Price Change",
}

export interface Note {
    id: number;
    note_type: NoteType;
    headline: Headline;
    created_at: Date;
    display_category: null;
    note_status: NoteStatus;
    listing_id: string;
    explanation: string;
    importance: null;
}

export enum Headline {
    LengthyExpensiveApplication = "\ud83d\udcdd Lengthy/expensive application",
    LikelyNegotiablePrice = "\ud83e\udd1d Likely negotiable price",
    LongTimeOnMarket = "⏰ Long time on market",
}

export enum NoteStatus {
    Standard = "standard",
}

export enum NoteType {
    ListingApplicationComplexity = "listing-application-complexity",
    ListingDroppedPrice = "listing-dropped-price",
    ListingLongTimeOnMarket = "listing-long-time-on-market",
}

export interface ReportCardPiece {
    id: string;
    type: Type;
    score: number;
    rating: Rating;
    display_sort_order: number;
    created_at: Date;
    listing_id: string;
    execution_id: string;
    name: Name;
    explanation: string;
    extra_data: ReportCardPieceExtraData;
}

export interface ReportCardPieceExtraData {
    neighborhood_price_data?: NeighborhoodPriceData;
    percentile_cheaper_last_30_days?: number;
    num_units_compared_last_30_days?: number;
    simple_explanation: string;
    percentile_cheaper_available_units?: number;
    num_units_compared_available_units?: number;
    common_neighborhood_subway_lines?: string[];
    issues?: Issue[];
}

export enum Issue {
    BedbugsReportedInTheLastYear = "Bedbugs reported in the last year",
    ManyHousingRelatedComplaintsTo311 = "Many housing-related complaints to 311",
    ManyHousingViolationsFromHPD = "Many housing violations from HPD",
    ManyNoiseRelatedComplaintsTo311 = "Many noise-related complaints to 311",
}

export interface NeighborhoodPriceData {
    price_25p_last_30_days: number;
    price_50p_last_30_days: number;
    price_75p_last_30_days: number;
    price_90p_last_30_days: number;
    lowest_price_last_30_days: number;
    highest_price_last_30_days: number;
    num_listings_past_30_days: number;
    has_available_listings_data: boolean;
    price_25p_available?: number;
    price_50p_available?: number;
    price_75p_available?: number;
    price_90p_available?: number;
    lowest_price_available?: number;
    highest_price_available: number;
    num_currently_available_listings: number;
    "lowest_price_ava ilable"?: number;
}

export enum Name {
    Amenities = "Amenities",
    BuildingConcerns = "Building Concerns",
    Nearby = "Nearby",
    Price = "Price",
    Subways = "Subways",
}

export enum Rating {
    Bad = "Bad",
    Fine = "Fine",
    Good = "Good",
    Great = "Great",
    Poor = "Poor",
}

export enum Type {
    Amenities = "amenities",
    Complaints = "complaints",
    NeighborhoodNearby = "neighborhood_nearby",
    Price = "price",
    Transit = "transit",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toApartmentsResponse(json: string): ApartmentsResponse {
        return cast(JSON.parse(json), r("ApartmentsResponse"));
    }

    public static apartmentsResponseToJson(value: ApartmentsResponse): string {
        return JSON.stringify(uncast(value, r("ApartmentsResponse")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) { }
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
                    : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "ApartmentsResponse": o([
        { json: "compelling_units_by_neighborhood", js: "compelling_units_by_neighborhood", typ: a(r("CompellingUnitsByNeighborhood")) },
        { json: "has_more", js: "has_more", typ: true },
        { json: "listings", js: "listings", typ: a(r("Listing")) },
    ], false),
    "CompellingUnitsByNeighborhood": o([
        { json: "neighborhood_url", js: "neighborhood_url", typ: "" },
        { json: "neighborhood_name", js: "neighborhood_name", typ: "" },
        { json: "units", js: "units", typ: a(r("Listing")) },
    ], false),
    "Listing": o([
        { json: "id", js: "id", typ: "" },
        { json: "bathrooms", js: "bathrooms", typ: 0 },
        { json: "neighborhood_display_name", js: "neighborhood_display_name", typ: "" },
        { json: "distance_to_good_park_miles", js: "distance_to_good_park_miles", typ: u(3.14, null) },
        { json: "bldg_complaints_per_unit", js: "bldg_complaints_per_unit", typ: null },
        { json: "extra_data", js: "extra_data", typ: r("ListingExtraData") },
        { json: "url", js: "url", typ: "" },
        { json: "rooms", js: "rooms", typ: 0 },
        { json: "is_available", js: "is_available", typ: true },
        { json: "estimated_size", js: "estimated_size", typ: null },
        { json: "bldg_bedbug_reports_last_year", js: "bldg_bedbug_reports_last_year", typ: 0 },
        { json: "unit_name", js: "unit_name", typ: "" },
        { json: "square_footage", js: "square_footage", typ: u(0, null) },
        { json: "amenities_list", js: "amenities_list", typ: "" },
        { json: "building_url", js: "building_url", typ: "" },
        { json: "unavailable_date", js: "unavailable_date", typ: null },
        { json: "neighborhood_search_url", js: "neighborhood_search_url", typ: "" },
        { json: "price_per_square_foot_dollars", js: "price_per_square_foot_dollars", typ: u(0, null) },
        { json: "info", js: "info", typ: r("Info") },
        { json: "bldg_complaints_last_year", js: "bldg_complaints_last_year", typ: 0 },
        { json: "availability_date", js: "availability_date", typ: Date },
        { json: "listed_neighborhood_url", js: "listed_neighborhood_url", typ: "" },
        { json: "popularity", js: "popularity", typ: 0 },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "bldg_complaints_last_five_years", js: "bldg_complaints_last_five_years", typ: 0 },
        { json: "status", js: "status", typ: "" },
        { json: "monthly_price_dollars", js: "monthly_price_dollars", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "updated_at", js: "updated_at", typ: Date },
        { json: "units_in_bldg", js: "units_in_bldg", typ: u(0, null) },
        { json: "description_summary", js: "description_summary", typ: "" },
        { json: "has_fee", js: "has_fee", typ: true },
        { json: "listing_type", js: "listing_type", typ: r("ListingType") },
        { json: "unit_listing_date", js: "unit_listing_date", typ: Date },
        { json: "bldg_built_year", js: "bldg_built_year", typ: null },
        { json: "alternate_url", js: "alternate_url", typ: "" },
        { json: "bedrooms", js: "bedrooms", typ: 0 },
        { json: "distance_to_subway_miles", js: "distance_to_subway_miles", typ: 3.14 },
        { json: "update_failure_count", js: "update_failure_count", typ: 0 },
        { json: "deal_statuses", js: "deal_statuses", typ: a(r("DealStatusElement")) },
        { json: "notes", js: "notes", typ: a(r("Note")) },
        { json: "report_card_pieces", js: "report_card_pieces", typ: a(r("ReportCardPiece")) },
    ], false),
    "DealStatusElement": o([
        { json: "listing_id", js: "listing_id", typ: "" },
        { json: "id", js: "id", typ: "" },
        { json: "deal_status", js: "deal_status", typ: r("DealStatusEnum") },
        { json: "listing_model_estimated_price_dollars", js: "listing_model_estimated_price_dollars", typ: 0 },
        { json: "deal_score", js: "deal_score", typ: 3.14 },
        { json: "num_units_compared_against", js: "num_units_compared_against", typ: 0 },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "execution_id", js: "execution_id", typ: "" },
        { json: "deal_status_rank", js: "deal_status_rank", typ: 0 },
        { json: "listing_actual_price_with_fees_dollars", js: "listing_actual_price_with_fees_dollars", typ: 0 },
        { json: "context", js: "context", typ: r("Context") },
        { json: "num_units_with_square_footage_compared_against", js: "num_units_with_square_footage_compared_against", typ: 0 },
    ], false),
    "ListingExtraData": o([
        { json: "amenities_corrections", js: "amenities_corrections", typ: a(r("AmenitiesCorrection")) },
    ], false),
    "AmenitiesCorrection": o([
        { json: "amenity", js: "amenity", typ: r("Amenity") },
        { json: "reason", js: "reason", typ: r("Reason") },
    ], false),
    "Info": o([
        { json: "url", js: "url", typ: "" },
        { json: "updated_at", js: "updated_at", typ: 3.14 },
        { json: "neighborhood_search_url", js: "neighborhood_search_url", typ: "" },
        { json: "unit_name", js: "unit_name", typ: "" },
        { json: "building_link", js: "building_link", typ: "" },
        { json: "images", js: "images", typ: a(m(u(null, ""))) },
        { json: "price_str", js: "price_str", typ: "" },
        { json: "details", js: "details", typ: a("") },
        { json: "has_fee", js: "has_fee", typ: r("HasFee") },
        { json: "popularity", js: "popularity", typ: "" },
        { json: "vitals_titles", js: "vitals_titles", typ: a(r("VitalsTitle")) },
        { json: "vitals_data", js: "vitals_data", typ: a("") },
        { json: "amenities_highlights", js: "amenities_highlights", typ: a(r("AmenitiesHighlight")) },
        { json: "other_amenities", js: "other_amenities", typ: a("") },
        { json: "similar_listings_links", js: "similar_listings_links", typ: a("") },
        { json: "listing_agents_name", js: "listing_agents_name", typ: a("any") },
        { json: "listing_agents_links", js: "listing_agents_links", typ: a("any") },
        { json: "status", js: "status", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "subway_stations", js: "subway_stations", typ: a(r("SubwayStation")) },
        { json: "listing_type", js: "listing_type", typ: r("ListingType") },
        { json: "neighborhood", js: "neighborhood", typ: "" },
        { json: "listed_neighborhood_url", js: "listed_neighborhood_url", typ: "" },
        { json: "nearby_data", js: "nearby_data", typ: a(r("NearbyDatum")) },
        { json: "price_history", js: "price_history", typ: a(r("PriceHistory")) },
        { json: "alternate_link", js: "alternate_link", typ: "" },
    ], false),
    "NearbyDatum": o([
        { json: "title", js: "title", typ: r("Title") },
        { json: "points_of_interest", js: "points_of_interest", typ: a(r("PointsOfInterest")) },
    ], false),
    "PointsOfInterest": o([
        { json: "name", js: "name", typ: "" },
        { json: "distance", js: "distance", typ: "" },
    ], false),
    "PriceHistory": o([
        { json: "price_changed_event", js: "price_changed_event", typ: a("") },
    ], false),
    "SubwayStation": o([
        { json: "routes", js: "routes", typ: a("") },
        { json: "distance", js: "distance", typ: "" },
        { json: "station_name", js: "station_name", typ: "" },
    ], false),
    "Note": o([
        { json: "id", js: "id", typ: 0 },
        { json: "note_type", js: "note_type", typ: r("NoteType") },
        { json: "headline", js: "headline", typ: r("Headline") },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "display_category", js: "display_category", typ: null },
        { json: "note_status", js: "note_status", typ: r("NoteStatus") },
        { json: "listing_id", js: "listing_id", typ: "" },
        { json: "explanation", js: "explanation", typ: "" },
        { json: "importance", js: "importance", typ: null },
    ], false),
    "ReportCardPiece": o([
        { json: "id", js: "id", typ: "" },
        { json: "type", js: "type", typ: r("Type") },
        { json: "score", js: "score", typ: 0 },
        { json: "rating", js: "rating", typ: r("Rating") },
        { json: "display_sort_order", js: "display_sort_order", typ: 0 },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "listing_id", js: "listing_id", typ: "" },
        { json: "execution_id", js: "execution_id", typ: "" },
        { json: "name", js: "name", typ: r("Name") },
        { json: "explanation", js: "explanation", typ: "" },
        { json: "extra_data", js: "extra_data", typ: r("ReportCardPieceExtraData") },
    ], false),
    "ReportCardPieceExtraData": o([
        { json: "neighborhood_price_data", js: "neighborhood_price_data", typ: u(undefined, r("NeighborhoodPriceData")) },
        { json: "percentile_cheaper_last_30_days", js: "percentile_cheaper_last_30_days", typ: u(undefined, 0) },
        { json: "num_units_compared_last_30_days", js: "num_units_compared_last_30_days", typ: u(undefined, 0) },
        { json: "simple_explanation", js: "simple_explanation", typ: "" },
        { json: "percentile_cheaper_available_units", js: "percentile_cheaper_available_units", typ: u(undefined, 0) },
        { json: "num_units_compared_available_units", js: "num_units_compared_available_units", typ: u(undefined, 0) },
        { json: "common_neighborhood_subway_lines", js: "common_neighborhood_subway_lines", typ: u(undefined, a("")) },
        { json: "issues", js: "issues", typ: u(undefined, a(r("Issue"))) },
    ], false),
    "NeighborhoodPriceData": o([
        { json: "price_25p_last_30_days", js: "price_25p_last_30_days", typ: 0 },
        { json: "price_50p_last_30_days", js: "price_50p_last_30_days", typ: 0 },
        { json: "price_75p_last_30_days", js: "price_75p_last_30_days", typ: 0 },
        { json: "price_90p_last_30_days", js: "price_90p_last_30_days", typ: 0 },
        { json: "lowest_price_last_30_days", js: "lowest_price_last_30_days", typ: 0 },
        { json: "highest_price_last_30_days", js: "highest_price_last_30_days", typ: 0 },
        { json: "num_listings_past_30_days", js: "num_listings_past_30_days", typ: 0 },
        { json: "has_available_listings_data", js: "has_available_listings_data", typ: true },
        { json: "price_25p_available", js: "price_25p_available", typ: u(undefined, 0) },
        { json: "price_50p_available", js: "price_50p_available", typ: u(undefined, 0) },
        { json: "price_75p_available", js: "price_75p_available", typ: u(undefined, 0) },
        { json: "price_90p_available", js: "price_90p_available", typ: u(undefined, 0) },
        { json: "lowest_price_available", js: "lowest_price_available", typ: u(undefined, 0) },
        { json: "highest_price_available", js: "highest_price_available", typ: 0 },
        { json: "num_currently_available_listings", js: "num_currently_available_listings", typ: 0 },
        { json: "lowest_price_ava ilable", js: "lowest_price_ava ilable", typ: u(undefined, 0) },
    ], false),
    "Context": [
        "neighborhood",
    ],
    "DealStatusEnum": [
        "fine",
        "good",
        "great",
    ],
    "Amenity": [
        "Dishwasher",
        "Elevator",
        "Laundry",
    ],
    "Reason": [
        "Another unit in the building claims to have an elevator.",
        "Building has at least 7 stories.",
        "Description implies dishwasher is present.",
        "Description implies elevator is present.",
        "Description implies washer/dryer is present.",
        "75+% of other units in the building have a dishwasher.",
    ],
    "AmenitiesHighlight": [
        "Cats and Dogs Allowed",
        "Cats Only - No Dogs",
        "Dishwasher",
        "Doorman",
        "Elevator",
        "Full-time Doorman",
        "Pets Allowed",
        "Private Outdoor Space",
        "Washer / Dryer in Unit",
    ],
    "HasFee": [
        "",
        "NO FEE",
    ],
    "ListingType": [
        "Co-op",
        "Condo",
        "Rental Unit",
    ],
    "Title": [
        "Colleges",
        "Museums",
        "Parks",
        "Schools",
    ],
    "VitalsTitle": [
        "Available on",
        "Days On Market",
        "Last Price Change",
    ],
    "Headline": [
        "\ud83d\udcdd Lengthy/expensive application",
        "\ud83e\udd1d Likely negotiable price",
        "⏰ Long time on market",
    ],
    "NoteStatus": [
        "standard",
    ],
    "NoteType": [
        "listing-application-complexity",
        "listing-dropped-price",
        "listing-long-time-on-market",
    ],
    "Issue": [
        "Bedbugs reported in the last year",
        "Many housing-related complaints to 311",
        "Many housing violations from HPD",
        "Many noise-related complaints to 311",
    ],
    "Name": [
        "Amenities",
        "Building Concerns",
        "Nearby",
        "Price",
        "Subways",
    ],
    "Rating": [
        "Bad",
        "Fine",
        "Good",
        "Great",
        "Poor",
    ],
    "Type": [
        "amenities",
        "complaints",
        "neighborhood_nearby",
        "price",
        "transit",
    ],
};
