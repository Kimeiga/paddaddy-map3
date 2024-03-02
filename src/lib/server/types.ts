// To parse this data:
//
//   import { Convert } from "./file";
//
//   const apartments = Convert.toApartments(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Apartments {
    neighborhood_url: string;
    neighborhood_name: string;
    units: Unit[];
}

export interface Unit {
    id: string;
    bathrooms: number;
    neighborhood_display_name: string;
    distance_to_good_park_miles: number | null;
    bldg_complaints_per_unit: null;
    extra_data: UnitExtraData;
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
    popularity: number | null;
    created_at: Date;
    bldg_complaints_last_five_years: number;
    status: string;
    monthly_price_dollars: number;
    description: string;
    updated_at: Date;
    units_in_bldg: number | null;
    description_summary: null | string;
    has_fee: boolean;
    listing_type: ListingType;
    unit_listing_date: Date | null;
    bldg_built_year: null;
    alternate_url: string;
    bedrooms: number;
    distance_to_subway_miles: number;
    update_failure_count: number;
    deal_statuses: DealStatusElement[];
    notes: Note[];
    report_card_pieces: ReportCardPiece[];
    location: Location;
    commute_obj: CommuteObj;
}

export interface CommuteObj {
    bounds: Bounds;
    copyrights: Copyrights;
    legs: Leg[];
    overview_polyline: Polyline;
    summary: Summary;
    warnings: string[];
    waypoint_order: any[];
    fare?: Fare;
}

export interface Bounds {
    northeast: Location;
    southwest: Location;
}

export interface Location {
    lat: number;
    lng: number;
}

export enum Copyrights {
    MapData2024 = "Map data ©2024",
    MapData2024Google = "Map data ©2024 Google",
}

export interface Fare {
    currency: Currency;
    text: Text;
    value: number;
}

export enum Currency {
    Usd = "USD",
}

export enum Text {
    The275 = "$2.75",
}

export interface Leg {
    arrival_time?: Time;
    departure_time?: Time;
    distance: Distance;
    duration: Distance;
    end_address: EndAddress;
    end_location: Location;
    start_address: string;
    start_location: Location;
    steps: Step[];
    traffic_speed_entry: any[];
    via_waypoint: any[];
}

export interface Time {
    text: string;
    time_zone: TimeZone;
    value: number;
}

export enum TimeZone {
    AmericaNewYork = "America/New_York",
}

export interface Distance {
    text: string;
    value: number;
}

export enum EndAddress {
    FlatironBuilding1755ThAveNewYorkNY10010USA = "Flatiron Building, 175 5th Ave, New York, NY 10010, USA",
}

export interface Step {
    distance: Distance;
    duration: Distance;
    end_location: Location;
    html_instructions?: string;
    polyline: Polyline;
    start_location: Location;
    steps?: Step[];
    travel_mode: TravelMode;
    transit_details?: TransitDetails;
    maneuver?: Maneuver;
    building_level?: BuildingLevel;
}

export interface BuildingLevel {
    number: number;
}

export enum Maneuver {
    RoundaboutRight = "roundabout-right",
    TurnLeft = "turn-left",
    TurnRight = "turn-right",
    TurnSharpLeft = "turn-sharp-left",
    TurnSlightLeft = "turn-slight-left",
    TurnSlightRight = "turn-slight-right",
}

export interface Polyline {
    points: string;
}

export interface TransitDetails {
    arrival_stop: Stop;
    arrival_time: Time;
    departure_stop: Stop;
    departure_time: Time;
    headsign: string;
    headway?: number;
    line: Line;
    num_stops: number;
}

export interface Stop {
    location: Location;
    name: string;
}

export interface Line {
    agencies: Agency[];
    color: Color;
    icon?: LineIcon;
    name: LineName;
    short_name: string;
    text_color: TextColor;
    url?: string;
    vehicle: Vehicle;
}

export interface Agency {
    name: AgencyName;
    phone?: Phone;
    url: string;
}

export enum AgencyName {
    MTA = "MTA",
    MTANewYorkCityTransit = "MTA New York City Transit",
    PortAuthorityTransHudsonCorporation = "Port Authority Trans-Hudson Corporation",
}

export enum Phone {
    The17183301234 = "1 (718) 330-1234",
    The18002347284 = "1 (800) 234-7284",
}

export enum Color {
    A3A5A8 = "#a3a5a8",
    B933Ad = "#b933ad",
    Ee352E = "#ee352e",
    F25E18 = "#f25e18",
    F29100 = "#f29100",
    F2C40A = "#f2c40a",
    The0039A6 = "#0039a6",
    The00933C = "#00933c",
    The1D59B3 = "#1d59b3",
    The4A8Df2 = "#4a8df2",
}

export enum LineIcon {
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA1PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/1.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA2PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/2.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA3PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/3.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA4PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/4.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA6PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/6.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA7PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/7.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTA7XPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/7X.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTABPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/B.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTACPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/C.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTADPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/D.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTAFPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/F.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTALPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/L.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTAQPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/Q.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTARPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/R.png",
    MapsGstaticCOMMapfilesTransitIw26UsNyMTAWPNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/W.png",
}

export enum LineName {
    BTrainCentralParkWestLocal6AVExpress = "B Train (Central Park West Local/6 Av Express)",
    CTrain8AVLocal = "C Train (8 Av Local)",
    ChelseaPiersEastSide = "Chelsea Piers - East Side",
    DTrain6AVExpress = "D Train (6 Av Express)",
    EastSideWestSide = "East Side - West Side",
    EltingvilleManhattanExpress = "Eltingville - Manhattan Express",
    FTrain6AVLocal = "F Train (6 Av Local)",
    FlushingExpress = "Flushing Express",
    FortGeorgeEastVillage = "Fort George - East Village",
    HarlemEastVillage = "Harlem - East Village",
    Hoboken33RDStreet = "Hoboken - 33rd Street",
    JournalSquare33RDStreet = "Journal Square - 33rd Street",
    KingsPlazaWilliamsburg = "Kings Plaza - Williamsburg",
    LTrain14StCanarsieLocal = "L Train (14 St-Canarsie Local)",
    LowerEastSideAbingdonSq = "Lower East Side - Abingdon Sq",
    LowerEastSideChelseaPiers = "Lower East Side - Chelsea Piers",
    QTrain2AVBroadwayExpress = "Q Train (2 Av/Broadway Express)",
    RTrainBroadwayLocal = "R Train (Broadway Local)",
    StGeorgeStatenIslandUniversityHospital = "St. George - Staten Island University Hospital",
    The1TrainBroadway7AVLocal = "1 Train (Broadway-7 Av Local)",
    The2Train7AVExpress = "2 Train (7 Av Express)",
    The3Train7AVExpress = "3 Train (7 Av Express)",
    The4TrainLexingtonAVExpress = "4 Train (Lexington Av Express)",
    The6TrainLexingtonAVLocalPelhamExpress = "6 Train (Lexington Av Local/Pelham Express)",
    The7TrainFlushingLocalAndExpress = "7 Train (Flushing Local and Express)",
    UnitedNationsW42StPier = "United Nations - W 42 St Pier",
    W44StSouthFerry = "W 44 St - South Ferry",
    WTrainBroadwayLocal = "W Train (Broadway Local)",
    WashingtonHeightsEastVillage = "Washington Heights - East Village",
    WatersidePortAuthorityTerminal = "Waterside - Port Authority Terminal",
    YorkvilleWestSide = "Yorkville - West Side",
}

export enum TextColor {
    Ffffff = "#ffffff",
    The000000 = "#000000",
}

export interface Vehicle {
    icon: VehicleIcon;
    name: VehicleName;
    type: VehicleType;
}

export enum VehicleIcon {
    MapsGstaticCOMMapfilesTransitIw26Bus2PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
    MapsGstaticCOMMapfilesTransitIw26Rail2PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
    MapsGstaticCOMMapfilesTransitIw26Subway2PNG = "//maps.gstatic.com/mapfiles/transit/iw2/6/subway2.png",
}

export enum VehicleName {
    Bus = "Bus",
    Subway = "Subway",
    Train = "Train",
}

export enum VehicleType {
    Bus = "BUS",
    HeavyRail = "HEAVY_RAIL",
    Subway = "SUBWAY",
}

export enum TravelMode {
    Transit = "TRANSIT",
    Walking = "WALKING",
}

export enum Summary {
    Broadway = "Broadway",
    E22NdSt = "E 22nd St",
    E23RDSt = "E 23rd St",
    E24ThSt = "E 24th St",
    E29ThSt = "E 29th St",
    E35ThStAndMadisonAve = "E 35th St and Madison Ave",
    Empty = "",
    LexingtonAveAndE23RDSt = "Lexington Ave and E 23rd St",
    MadisonAve = "Madison Ave",
    The5ThAve = "5th Ave",
    W14ThStAnd5ThAve = "W 14th St and 5th Ave",
    W15ThStAnd5ThAve = "W 15th St and 5th Ave",
    W16ThStAnd5ThAve = "W 16th St and 5th Ave",
    W19ThStAnd5ThAve = "W 19th St and 5th Ave",
    W20ThSt = "W 20th St",
    W21StSt = "W 21st St",
    W22NdSt = "W 22nd St",
    W23RDSt = "W 23rd St",
    W24ThSt = "W 24th St",
    W29ThStAndBroadway = "W 29th St and Broadway",
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
    Bad = "bad",
    Fine = "fine",
    Good = "good",
    Great = "great",
    Poor = "poor",
}

export interface UnitExtraData {
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
    other_amenities: OtherAmenity[];
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
    PartTimeDoorman = "Part-time Doorman",
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
    Condop = "Condop",
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

export enum OtherAmenity {
    Balcony = "Balcony",
    BikeRoom = "Bike Room",
    CentralAir = "Central Air",
    ChildrenSPlayroom = "Children's Playroom",
    CityView = "City View",
    CoPurchaseAllowed = "Co-purchase Allowed",
    ColdStorage = "Cold Storage",
    CommunityRecreationFacilities = "Community Recreation Facilities",
    Concierge = "Concierge",
    Courtyard = "Courtyard",
    Deck = "Deck",
    Empty = "",
    Fireplace = "Fireplace",
    FireplaceDecorative = "Fireplace: Decorative",
    Furnished = "Furnished",
    GarageParking = "Garage Parking",
    Garden = "Garden",
    GardenView = "Garden View",
    GiftsAllowed = "Gifts Allowed",
    GreenBuilding = "Green Building",
    GuarantorsAllowed = "Guarantors Allowed",
    Gym = "Gym",
    HardwoodFloors = "Hardwood Floors",
    HotTub = "Hot Tub",
    LaundryInBuilding = "Laundry in Building",
    LiveInSuper = "Live-in Super",
    LockerCage = "Locker/Cage",
    MediaRoom = "Media Room",
    PackageRoom = "Package Room",
    ParentsBuyingAllowed = "Parents Buying Allowed",
    ParkView = "Park View",
    ParkingAvailable = "Parking Available",
    Patio = "Patio",
    PiedATerreAllowed = "Pied-a-Terre Allowed",
    PrivateRoofDeck = "Private Roof Deck",
    RoofDeck = "Roof Deck",
    RoofRights = "Roof Rights",
    SkylineView = "Skyline View",
    SmokeFree = "Smoke-free",
    StorageAvailable = "Storage Available",
    SubletsAllowed = "Sublets Allowed",
    SwimmingPool = "Swimming Pool",
    Terrace = "Terrace",
    ValetParking = "Valet Parking",
    VirtualDoorman = "Virtual Doorman",
    WaterView = "Water View",
    Waterfront = "Waterfront",
    WheelchairAccess = "Wheelchair Access",
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
    LeasingLaunchDate = "Leasing Launch Date",
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
    BewareAggressivePricingAlgorithm = "\ud83d\udcc8 Beware aggressive pricing algorithm",
    LengthyExpensiveApplication = "\ud83d\udcdd Lengthy/expensive application",
    LikelyNegotiablePrice = "\ud83e\udd1d Likely negotiable price",
    LongTimeOnMarket = "⏰ Long time on market",
}

export enum NoteStatus {
    Bad = "bad",
    Standard = "standard",
}

export enum NoteType {
    ListingAggressivePricingAlgorithm = "listing-aggressive-pricing-algorithm",
    ListingApplicationComplexity = "listing-application-complexity",
    ListingDroppedPrice = "listing-dropped-price",
    ListingLongTimeOnMarket = "listing-long-time-on-market",
}

export interface ReportCardPiece {
    id: string;
    type: ReportCardPieceType;
    score: number | null;
    rating: Rating;
    display_sort_order: number;
    created_at: Date;
    listing_id: string;
    execution_id: string;
    name: ReportCardPieceName;
    explanation: string;
    extra_data: ReportCardPieceExtraData;
}

export interface ReportCardPieceExtraData {
    issues?: Issue[];
    simple_explanation: string;
    neighborhood_price_data?: NeighborhoodPriceData;
    percentile_cheaper_last_30_days?: number;
    num_units_compared_last_30_days?: number;
    percentile_cheaper_available_units?: number;
    num_units_compared_available_units?: number;
    common_neighborhood_subway_lines?: string[];
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

export enum ReportCardPieceName {
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
    NA = "N/A",
    Poor = "Poor",
}

export enum ReportCardPieceType {
    Amenities = "amenities",
    Complaints = "complaints",
    NeighborhoodNearby = "neighborhood_nearby",
    Price = "price",
    Transit = "transit",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toApartments(json: string): Apartments[] {
        return cast(JSON.parse(json), a(r("Apartments")));
    }

    public static apartmentsToJson(value: Apartments[]): string {
        return JSON.stringify(uncast(value, a(r("Apartments"))), null, 2);
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
    "Apartments": o([
        { json: "neighborhood_url", js: "neighborhood_url", typ: "" },
        { json: "neighborhood_name", js: "neighborhood_name", typ: "" },
        { json: "units", js: "units", typ: a(r("Unit")) },
    ], false),
    "Unit": o([
        { json: "id", js: "id", typ: "" },
        { json: "bathrooms", js: "bathrooms", typ: 0 },
        { json: "neighborhood_display_name", js: "neighborhood_display_name", typ: "" },
        { json: "distance_to_good_park_miles", js: "distance_to_good_park_miles", typ: u(3.14, null) },
        { json: "bldg_complaints_per_unit", js: "bldg_complaints_per_unit", typ: null },
        { json: "extra_data", js: "extra_data", typ: r("UnitExtraData") },
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
        { json: "popularity", js: "popularity", typ: u(0, null) },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "bldg_complaints_last_five_years", js: "bldg_complaints_last_five_years", typ: 0 },
        { json: "status", js: "status", typ: "" },
        { json: "monthly_price_dollars", js: "monthly_price_dollars", typ: 0 },
        { json: "description", js: "description", typ: "" },
        { json: "updated_at", js: "updated_at", typ: Date },
        { json: "units_in_bldg", js: "units_in_bldg", typ: u(0, null) },
        { json: "description_summary", js: "description_summary", typ: u(null, "") },
        { json: "has_fee", js: "has_fee", typ: true },
        { json: "listing_type", js: "listing_type", typ: r("ListingType") },
        { json: "unit_listing_date", js: "unit_listing_date", typ: u(Date, null) },
        { json: "bldg_built_year", js: "bldg_built_year", typ: null },
        { json: "alternate_url", js: "alternate_url", typ: "" },
        { json: "bedrooms", js: "bedrooms", typ: 0 },
        { json: "distance_to_subway_miles", js: "distance_to_subway_miles", typ: 3.14 },
        { json: "update_failure_count", js: "update_failure_count", typ: 0 },
        { json: "deal_statuses", js: "deal_statuses", typ: a(r("DealStatusElement")) },
        { json: "notes", js: "notes", typ: a(r("Note")) },
        { json: "report_card_pieces", js: "report_card_pieces", typ: a(r("ReportCardPiece")) },
        { json: "location", js: "location", typ: r("Location") },
        { json: "commute_obj", js: "commute_obj", typ: r("CommuteObj") },
    ], false),
    "CommuteObj": o([
        { json: "bounds", js: "bounds", typ: r("Bounds") },
        { json: "copyrights", js: "copyrights", typ: r("Copyrights") },
        { json: "legs", js: "legs", typ: a(r("Leg")) },
        { json: "overview_polyline", js: "overview_polyline", typ: r("Polyline") },
        { json: "summary", js: "summary", typ: r("Summary") },
        { json: "warnings", js: "warnings", typ: a("") },
        { json: "waypoint_order", js: "waypoint_order", typ: a("any") },
        { json: "fare", js: "fare", typ: u(undefined, r("Fare")) },
    ], false),
    "Bounds": o([
        { json: "northeast", js: "northeast", typ: r("Location") },
        { json: "southwest", js: "southwest", typ: r("Location") },
    ], false),
    "Location": o([
        { json: "lat", js: "lat", typ: 3.14 },
        { json: "lng", js: "lng", typ: 3.14 },
    ], false),
    "Fare": o([
        { json: "currency", js: "currency", typ: r("Currency") },
        { json: "text", js: "text", typ: r("Text") },
        { json: "value", js: "value", typ: 3.14 },
    ], false),
    "Leg": o([
        { json: "arrival_time", js: "arrival_time", typ: u(undefined, r("Time")) },
        { json: "departure_time", js: "departure_time", typ: u(undefined, r("Time")) },
        { json: "distance", js: "distance", typ: r("Distance") },
        { json: "duration", js: "duration", typ: r("Distance") },
        { json: "end_address", js: "end_address", typ: r("EndAddress") },
        { json: "end_location", js: "end_location", typ: r("Location") },
        { json: "start_address", js: "start_address", typ: "" },
        { json: "start_location", js: "start_location", typ: r("Location") },
        { json: "steps", js: "steps", typ: a(r("Step")) },
        { json: "traffic_speed_entry", js: "traffic_speed_entry", typ: a("any") },
        { json: "via_waypoint", js: "via_waypoint", typ: a("any") },
    ], false),
    "Time": o([
        { json: "text", js: "text", typ: "" },
        { json: "time_zone", js: "time_zone", typ: r("TimeZone") },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "Distance": o([
        { json: "text", js: "text", typ: "" },
        { json: "value", js: "value", typ: 0 },
    ], false),
    "Step": o([
        { json: "distance", js: "distance", typ: r("Distance") },
        { json: "duration", js: "duration", typ: r("Distance") },
        { json: "end_location", js: "end_location", typ: r("Location") },
        { json: "html_instructions", js: "html_instructions", typ: u(undefined, "") },
        { json: "polyline", js: "polyline", typ: r("Polyline") },
        { json: "start_location", js: "start_location", typ: r("Location") },
        { json: "steps", js: "steps", typ: u(undefined, a(r("Step"))) },
        { json: "travel_mode", js: "travel_mode", typ: r("TravelMode") },
        { json: "transit_details", js: "transit_details", typ: u(undefined, r("TransitDetails")) },
        { json: "maneuver", js: "maneuver", typ: u(undefined, r("Maneuver")) },
        { json: "building_level", js: "building_level", typ: u(undefined, r("BuildingLevel")) },
    ], false),
    "BuildingLevel": o([
        { json: "number", js: "number", typ: 0 },
    ], false),
    "Polyline": o([
        { json: "points", js: "points", typ: "" },
    ], false),
    "TransitDetails": o([
        { json: "arrival_stop", js: "arrival_stop", typ: r("Stop") },
        { json: "arrival_time", js: "arrival_time", typ: r("Time") },
        { json: "departure_stop", js: "departure_stop", typ: r("Stop") },
        { json: "departure_time", js: "departure_time", typ: r("Time") },
        { json: "headsign", js: "headsign", typ: "" },
        { json: "headway", js: "headway", typ: u(undefined, 0) },
        { json: "line", js: "line", typ: r("Line") },
        { json: "num_stops", js: "num_stops", typ: 0 },
    ], false),
    "Stop": o([
        { json: "location", js: "location", typ: r("Location") },
        { json: "name", js: "name", typ: "" },
    ], false),
    "Line": o([
        { json: "agencies", js: "agencies", typ: a(r("Agency")) },
        { json: "color", js: "color", typ: r("Color") },
        { json: "icon", js: "icon", typ: u(undefined, r("LineIcon")) },
        { json: "name", js: "name", typ: r("LineName") },
        { json: "short_name", js: "short_name", typ: "" },
        { json: "text_color", js: "text_color", typ: r("TextColor") },
        { json: "url", js: "url", typ: u(undefined, "") },
        { json: "vehicle", js: "vehicle", typ: r("Vehicle") },
    ], false),
    "Agency": o([
        { json: "name", js: "name", typ: r("AgencyName") },
        { json: "phone", js: "phone", typ: u(undefined, r("Phone")) },
        { json: "url", js: "url", typ: "" },
    ], false),
    "Vehicle": o([
        { json: "icon", js: "icon", typ: r("VehicleIcon") },
        { json: "name", js: "name", typ: r("VehicleName") },
        { json: "type", js: "type", typ: r("VehicleType") },
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
    "UnitExtraData": o([
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
        { json: "other_amenities", js: "other_amenities", typ: a(r("OtherAmenity")) },
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
        { json: "type", js: "type", typ: r("ReportCardPieceType") },
        { json: "score", js: "score", typ: u(0, null) },
        { json: "rating", js: "rating", typ: r("Rating") },
        { json: "display_sort_order", js: "display_sort_order", typ: 0 },
        { json: "created_at", js: "created_at", typ: Date },
        { json: "listing_id", js: "listing_id", typ: "" },
        { json: "execution_id", js: "execution_id", typ: "" },
        { json: "name", js: "name", typ: r("ReportCardPieceName") },
        { json: "explanation", js: "explanation", typ: "" },
        { json: "extra_data", js: "extra_data", typ: r("ReportCardPieceExtraData") },
    ], false),
    "ReportCardPieceExtraData": o([
        { json: "issues", js: "issues", typ: u(undefined, a(r("Issue"))) },
        { json: "simple_explanation", js: "simple_explanation", typ: "" },
        { json: "neighborhood_price_data", js: "neighborhood_price_data", typ: u(undefined, r("NeighborhoodPriceData")) },
        { json: "percentile_cheaper_last_30_days", js: "percentile_cheaper_last_30_days", typ: u(undefined, 0) },
        { json: "num_units_compared_last_30_days", js: "num_units_compared_last_30_days", typ: u(undefined, 0) },
        { json: "percentile_cheaper_available_units", js: "percentile_cheaper_available_units", typ: u(undefined, 0) },
        { json: "num_units_compared_available_units", js: "num_units_compared_available_units", typ: u(undefined, 0) },
        { json: "common_neighborhood_subway_lines", js: "common_neighborhood_subway_lines", typ: u(undefined, a("")) },
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
    "Copyrights": [
        "Map data ©2024",
        "Map data ©2024 Google",
    ],
    "Currency": [
        "USD",
    ],
    "Text": [
        "$2.75",
    ],
    "TimeZone": [
        "America/New_York",
    ],
    "EndAddress": [
        "Flatiron Building, 175 5th Ave, New York, NY 10010, USA",
    ],
    "Maneuver": [
        "roundabout-right",
        "turn-left",
        "turn-right",
        "turn-sharp-left",
        "turn-slight-left",
        "turn-slight-right",
    ],
    "AgencyName": [
        "MTA",
        "MTA New York City Transit",
        "Port Authority Trans-Hudson Corporation",
    ],
    "Phone": [
        "1 (718) 330-1234",
        "1 (800) 234-7284",
    ],
    "Color": [
        "#a3a5a8",
        "#b933ad",
        "#ee352e",
        "#f25e18",
        "#f29100",
        "#f2c40a",
        "#0039a6",
        "#00933c",
        "#1d59b3",
        "#4a8df2",
    ],
    "LineIcon": [
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/1.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/2.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/3.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/4.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/6.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/7.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/7X.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/B.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/C.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/D.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/F.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/L.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/Q.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/R.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/us-ny-mta/W.png",
    ],
    "LineName": [
        "B Train (Central Park West Local/6 Av Express)",
        "C Train (8 Av Local)",
        "Chelsea Piers - East Side",
        "D Train (6 Av Express)",
        "East Side - West Side",
        "Eltingville - Manhattan Express",
        "F Train (6 Av Local)",
        "Flushing Express",
        "Fort George - East Village",
        "Harlem - East Village",
        "Hoboken - 33rd Street",
        "Journal Square - 33rd Street",
        "Kings Plaza - Williamsburg",
        "L Train (14 St-Canarsie Local)",
        "Lower East Side - Abingdon Sq",
        "Lower East Side - Chelsea Piers",
        "Q Train (2 Av/Broadway Express)",
        "R Train (Broadway Local)",
        "St. George - Staten Island University Hospital",
        "1 Train (Broadway-7 Av Local)",
        "2 Train (7 Av Express)",
        "3 Train (7 Av Express)",
        "4 Train (Lexington Av Express)",
        "6 Train (Lexington Av Local/Pelham Express)",
        "7 Train (Flushing Local and Express)",
        "United Nations - W 42 St Pier",
        "W 44 St - South Ferry",
        "W Train (Broadway Local)",
        "Washington Heights - East Village",
        "Waterside - Port Authority Terminal",
        "Yorkville - West Side",
    ],
    "TextColor": [
        "#ffffff",
        "#000000",
    ],
    "VehicleIcon": [
        "//maps.gstatic.com/mapfiles/transit/iw2/6/bus2.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/rail2.png",
        "//maps.gstatic.com/mapfiles/transit/iw2/6/subway2.png",
    ],
    "VehicleName": [
        "Bus",
        "Subway",
        "Train",
    ],
    "VehicleType": [
        "BUS",
        "HEAVY_RAIL",
        "SUBWAY",
    ],
    "TravelMode": [
        "TRANSIT",
        "WALKING",
    ],
    "Summary": [
        "Broadway",
        "E 22nd St",
        "E 23rd St",
        "E 24th St",
        "E 29th St",
        "E 35th St and Madison Ave",
        "",
        "Lexington Ave and E 23rd St",
        "Madison Ave",
        "5th Ave",
        "W 14th St and 5th Ave",
        "W 15th St and 5th Ave",
        "W 16th St and 5th Ave",
        "W 19th St and 5th Ave",
        "W 20th St",
        "W 21st St",
        "W 22nd St",
        "W 23rd St",
        "W 24th St",
        "W 29th St and Broadway",
    ],
    "Context": [
        "neighborhood",
    ],
    "DealStatusEnum": [
        "bad",
        "fine",
        "good",
        "great",
        "poor",
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
        "Part-time Doorman",
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
        "Condop",
        "Rental Unit",
    ],
    "Title": [
        "Colleges",
        "Museums",
        "Parks",
        "Schools",
    ],
    "OtherAmenity": [
        "Balcony",
        "Bike Room",
        "Central Air",
        "Children's Playroom",
        "City View",
        "Co-purchase Allowed",
        "Cold Storage",
        "Community Recreation Facilities",
        "Concierge",
        "Courtyard",
        "Deck",
        "",
        "Fireplace",
        "Fireplace: Decorative",
        "Furnished",
        "Garage Parking",
        "Garden",
        "Garden View",
        "Gifts Allowed",
        "Green Building",
        "Guarantors Allowed",
        "Gym",
        "Hardwood Floors",
        "Hot Tub",
        "Laundry in Building",
        "Live-in Super",
        "Locker/Cage",
        "Media Room",
        "Package Room",
        "Parents Buying Allowed",
        "Park View",
        "Parking Available",
        "Patio",
        "Pied-a-Terre Allowed",
        "Private Roof Deck",
        "Roof Deck",
        "Roof Rights",
        "Skyline View",
        "Smoke-free",
        "Storage Available",
        "Sublets Allowed",
        "Swimming Pool",
        "Terrace",
        "Valet Parking",
        "Virtual Doorman",
        "Water View",
        "Waterfront",
        "Wheelchair Access",
    ],
    "VitalsTitle": [
        "Available on",
        "Days On Market",
        "Last Price Change",
        "Leasing Launch Date",
    ],
    "Headline": [
        "\ud83d\udcc8 Beware aggressive pricing algorithm",
        "\ud83d\udcdd Lengthy/expensive application",
        "\ud83e\udd1d Likely negotiable price",
        "⏰ Long time on market",
    ],
    "NoteStatus": [
        "bad",
        "standard",
    ],
    "NoteType": [
        "listing-aggressive-pricing-algorithm",
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
    "ReportCardPieceName": [
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
        "N/A",
        "Poor",
    ],
    "ReportCardPieceType": [
        "amenities",
        "complaints",
        "neighborhood_nearby",
        "price",
        "transit",
    ],
};
