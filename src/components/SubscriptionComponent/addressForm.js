import React, { Component } from "react";
import { Container } from "reactstrap";
import { FormControl, FormHelperText, TextField, Select, MenuItem } from "@material-ui/core";

export default class AddressForm extends Component {

  renderStateOptions() {
    const states = [ "Alaska",
      "Alabama",
      "Arkansas",
      "American Samoa",
      "Arizona",
      "California",
      "Colorado",
      "Connecticut",
      "District of Columbia",
      "Delaware",
      "Florida",
      "Georgia",
      "Guam",
      "Hawaii",
      "Iowa",
      "Idaho",
      "Illinois",
      "Indiana",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Massachusetts",
      "Maryland",
      "Maine",
      "Michigan",
      "Minnesota",
      "Missouri",
      "Mississippi",
      "Montana",
      "North Carolina",
      " North Dakota",
      "Nebraska",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "Nevada",
      "New York",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Puerto Rico",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Virginia",
      "Virgin Islands",
      "Vermont",
      "Washington",
      "Wisconsin",
      "West Virginia",
      "Wyoming" ];
    return states.map((state, index) => <MenuItem key={index} value={state}>{state}</MenuItem>)
  }

  renderCityOptions(state) {
    const cities = [ { "name": "New York", "cities": [ "New York", "Buffalo", "Rochester", "Yonkers", "Syracuse", "Albany", "New Rochelle", "Mount Vernon", "Schenectady", "Utica", "White Plains", "Hempstead", "Troy", "Niagara Falls", "Binghamton", "Freeport", "Valley Stream" ] }, {
      "name": "California",
      "cities": [ "Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Chula Vista", "Irvine", "Fremont", "San Bernardino", "Modesto", "Fontana", "Oxnard", "Moreno Valley", "Huntington Beach", "Glendale", "Santa Clarita", "Garden Grove", "Oceanside", "Rancho Cucamonga", "Santa Rosa", "Ontario", "Lancaster", "Elk Grove", "Corona", "Palmdale", "Salinas", "Pomona", "Hayward", "Escondido", "Torrance", "Sunnyvale", "Orange", "Fullerton", "Pasadena", "Thousand Oaks", "Visalia", "Simi Valley", "Concord", "Roseville", "Victorville", "Santa Clara", "Vallejo", "Berkeley", "El Monte", "Downey", "Costa Mesa", "Inglewood", "Carlsbad", "San Buenaventura (Ventura)", "Fairfield", "West Covina", "Murrieta", "Richmond", "Norwalk", "Antioch", "Temecula", "Burbank", "Daly City", "Rialto", "Santa Maria", "El Cajon", "San Mateo", "Clovis", "Compton", "Jurupa Valley", "Vista", "South Gate", "Mission Viejo", "Vacaville", "Carson", "Hesperia", "Santa Monica", "Westminster", "Redding", "Santa Barbara", "Chico", "Newport Beach", "San Leandro", "San Marcos", "Whittier", "Hawthorne", "Citrus Heights", "Tracy", "Alhambra", "Livermore", "Buena Park", "Menifee", "Hemet", "Lakewood", "Merced", "Chino", "Indio", "Redwood City", "Lake Forest", "Napa", "Tustin", "Bellflower", "Mountain View", "Chino Hills", "Baldwin Park", "Alameda", "Upland", "San Ramon", "Folsom", "Pleasanton", "Union City", "Perris", "Manteca", "Lynwood", "Apple Valley", "Redlands", "Turlock", "Milpitas", "Redondo Beach", "Rancho Cordova", "Yorba Linda", "Palo Alto", "Davis", "Camarillo", "Walnut Creek", "Pittsburg", "South San Francisco", "Yuba City", "San Clemente", "Laguna Niguel", "Pico Rivera", "Montebello", "Lodi", "Madera", "Santa Cruz", "La Habra", "Encinitas", "Monterey Park", "Tulare", "Cupertino", "Gardena", "National City", "Rocklin", "Petaluma", "Huntington Park", "San Rafael", "La Mesa", "Arcadia", "Fountain Valley", "Diamond Bar", "Woodland", "Santee", "Lake Elsinore", "Porterville", "Paramount", "Eastvale", "Rosemead", "Hanford", "Highland", "Brentwood", "Novato", "Colton", "Cathedral City", "Delano", "Yucaipa", "Watsonville", "Placentia", "Glendora", "Gilroy", "Palm Desert", "Cerritos", "West Sacramento", "Aliso Viejo", "Poway", "La Mirada", "Rancho Santa Margarita", "Cypress", "Dublin", "Covina", "Azusa", "Palm Springs", "San Luis Obispo", "Ceres", "San Jacinto", "Lincoln", "Newark", "Lompoc", "El Centro", "Danville", "Bell Gardens", "Coachella", "Rancho Palos Verdes", "San Bruno", "Rohnert Park", "Brea", "La Puente", "Campbell", "San Gabriel", "Beaumont", "Morgan Hill", "Culver City", "Calexico", "Stanton", "La Quinta", "Pacifica", "Montclair", "Oakley", "Monrovia", "Los Banos", "Martinez" ]
    }, {
      "name": "Illinois",
      "cities": [ "Chicago", "Aurora", "Rockford", "Joliet", "Naperville", "Springfield", "Peoria", "Elgin", "Waukegan", "Cicero", "Champaign", "Bloomington", "Arlington Heights", "Evanston", "Decatur", "Schaumburg", "Bolingbrook", "Palatine", "Skokie", "Des Plaines", "Orland Park", "Tinley Park", "Oak Lawn", "Berwyn", "Mount Prospect", "Normal", "Wheaton", "Hoffman Estates", "Oak Park", "Downers Grove", "Elmhurst", "Glenview", "DeKalb", "Lombard", "Belleville", "Moline", "Buffalo Grove", "Bartlett", "Urbana", "Quincy", "Crystal Lake", "Plainfield", "Streamwood", "Carol Stream", "Romeoville", "Rock Island", "Hanover Park", "Carpentersville", "Wheeling", "Park Ridge", "Addison", "Calumet City" ]
    }, {
      "name": "Texas",
      "cities": [ "Houston", "San Antonio", "Dallas", "Austin", "Fort Worth", "El Paso", "Arlington", "Corpus Christi", "Plano", "Laredo", "Lubbock", "Garland", "Irving", "Amarillo", "Grand Prairie", "Brownsville", "Pasadena", "McKinney", "Mesquite", "McAllen", "Killeen", "Frisco", "Waco", "Carrollton", "Denton", "Midland", "Abilene", "Beaumont", "Round Rock", "Odessa", "Wichita Falls", "Richardson", "Lewisville", "Tyler", "College Station", "Pearland", "San Angelo", "Allen", "League City", "Sugar Land", "Longview", "Edinburg", "Mission", "Bryan", "Baytown", "Pharr", "Temple", "Missouri City", "Flower Mound", "Harlingen", "North Richland Hills", "Victoria", "Conroe", "New Braunfels", "Mansfield", "Cedar Park", "Rowlett", "Port Arthur", "Euless", "Georgetown", "Pflugerville", "DeSoto", "San Marcos", "Grapevine", "Bedford", "Galveston", "Cedar Hill", "Texas City", "Wylie", "Haltom City", "Keller", "Coppell", "Rockwall", "Huntsville", "Duncanville", "Sherman", "The Colony", "Burleson", "Hurst", "Lancaster", "Texarkana", "Friendswood", "Weslaco" ]
    }, { "name": "Pennsylvania", "cities": [ "Philadelphia", "Pittsburgh", "Allentown", "Erie", "Reading", "Scranton", "Bethlehem", "Lancaster", "Harrisburg", "Altoona", "York", "State College", "Wilkes-Barre" ] }, {
      "name": "Arizona",
      "cities": [ "Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale", "Gilbert", "Tempe", "Peoria", "Surprise", "Yuma", "Avondale", "Goodyear", "Flagstaff", "Buckeye", "Lake Havasu City", "Casa Grande", "Sierra Vista", "Maricopa", "Oro Valley", "Prescott", "Bullhead City", "Prescott Valley", "Marana", "Apache Junction" ]
    }, {
      "name": "Florida",
      "cities": [ "Jacksonville", "Miami", "Tampa", "Orlando", "St. Petersburg", "Hialeah", "Tallahassee", "Fort Lauderdale", "Port St. Lucie", "Cape Coral", "Pembroke Pines", "Hollywood", "Miramar", "Gainesville", "Coral Springs", "Miami Gardens", "Clearwater", "Palm Bay", "Pompano Beach", "West Palm Beach", "Lakeland", "Davie", "Miami Beach", "Sunrise", "Plantation", "Boca Raton", "Deltona", "Largo", "Deerfield Beach", "Palm Coast", "Melbourne", "Boynton Beach", "Lauderhill", "Weston", "Fort Myers", "Kissimmee", "Homestead", "Tamarac", "Delray Beach", "Daytona Beach", "North Miami", "Wellington", "North Port", "Jupiter", "Ocala", "Port Orange", "Margate", "Coconut Creek", "Sanford", "Sarasota", "Pensacola", "Bradenton", "Palm Beach Gardens", "Pinellas Park", "Coral Gables", "Doral", "Bonita Springs", "Apopka", "Titusville", "North Miami Beach", "Oakland Park", "Fort Pierce", "North Lauderdale", "Cutler Bay", "Altamonte Springs", "St. Cloud", "Greenacres", "Ormond Beach", "Ocoee", "Hallandale Beach", "Winter Garden", "Aventura" ]
    }, { "name": "Indiana", "cities": [ "Indianapolis", "Fort Wayne", "Evansville", "South Bend", "Carmel", "Bloomington", "Fishers", "Hammond", "Gary", "Muncie", "Lafayette", "Terre Haute", "Kokomo", "Anderson", "Noblesville", "Greenwood", "Elkhart", "Mishawaka", "Lawrence", "Jeffersonville", "Columbus", "Portage" ] }, {
      "name": "Ohio",
      "cities": [ "Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron", "Dayton", "Parma", "Canton", "Youngstown", "Lorain", "Hamilton", "Springfield", "Kettering", "Elyria", "Lakewood", "Cuyahoga Falls", "Middletown", "Euclid", "Newark", "Mansfield", "Mentor", "Beavercreek", "Cleveland Heights", "Strongsville", "Dublin", "Fairfield", "Findlay", "Warren", "Lancaster", "Lima", "Huber Heights", "Westerville", "Marion", "Grove City" ]
    }, { "name": "North Carolina", "cities": [ "Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem", "Fayetteville", "Cary", "Wilmington", "High Point", "Greenville", "Asheville", "Concord", "Gastonia", "Jacksonville", "Chapel Hill", "Rocky Mount", "Burlington", "Wilson", "Huntersville", "Kannapolis", "Apex", "Hickory", "Goldsboro" ] }, {
      "name": "Michigan",
      "cities": [ "Detroit", "Grand Rapids", "Warren", "Sterling Heights", "Ann Arbor", "Lansing", "Flint", "Dearborn", "Livonia", "Westland", "Troy", "Farmington Hills", "Kalamazoo", "Wyoming", "Southfield", "Rochester Hills", "Taylor", "Pontiac", "St. Clair Shores", "Royal Oak", "Novi", "Dearborn Heights", "Battle Creek", "Saginaw", "Kentwood", "East Lansing", "Roseville", "Portage", "Midland", "Lincoln Park", "Muskegon" ]
    }, { "name": "Tennessee", "cities": [ "Memphis", "Nashville-Davidson", "Knoxville", "Chattanooga", "Clarksville", "Murfreesboro", "Jackson", "Franklin", "Johnson City", "Bartlett", "Hendersonville", "Kingsport", "Collierville", "Cleveland", "Smyrna", "Germantown", "Brentwood" ] }, {
      "name": "Massachusetts",
      "cities": [ "Boston", "Worcester", "Springfield", "Lowell", "Cambridge", "New Bedford", "Brockton", "Quincy", "Lynn", "Fall River", "Newton", "Lawrence", "Somerville", "Waltham", "Haverhill", "Malden", "Medford", "Taunton", "Chicopee", "Weymouth Town", "Revere", "Peabody", "Methuen", "Barnstable Town", "Pittsfield", "Attleboro", "Everett", "Salem", "Westfield", "Leominster", "Fitchburg", "Beverly", "Holyoke", "Marlborough", "Woburn", "Chelsea" ]
    }, { "name": "Washington", "cities": [ "Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue", "Kent", "Everett", "Renton", "Yakima", "Federal Way", "Spokane Valley", "Bellingham", "Kennewick", "Auburn", "Pasco", "Marysville", "Lakewood", "Redmond", "Shoreline", "Richland", "Kirkland", "Burien", "Sammamish", "Olympia", "Lacey", "Edmonds", "Bremerton", "Puyallup" ] }, {
      "name": "Colorado",
      "cities": [ "Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial", "Boulder", "Greeley", "Longmont", "Loveland", "Grand Junction", "Broomfield", "Castle Rock", "Commerce City", "Parker", "Littleton", "Northglenn" ]
    }, { "name": "District of Columbia", "cities": [ "Washington" ] }, { "name": "Maryland", "cities": [ "Baltimore", "Frederick", "Rockville", "Gaithersburg", "Bowie", "Hagerstown", "Annapolis" ] }, { "name": "Kentucky", "cities": [ "Louisville/Jefferson County", "Lexington-Fayette", "Bowling Green", "Owensboro", "Covington" ] }, {
      "name": "Oregon",
      "cities": [ "Portland", "Eugene", "Salem", "Gresham", "Hillsboro", "Beaverton", "Bend", "Medford", "Springfield", "Corvallis", "Albany", "Tigard", "Lake Oswego", "Keizer" ]
    }, { "name": "Oklahoma", "cities": [ "Oklahoma City", "Tulsa", "Norman", "Broken Arrow", "Lawton", "Edmond", "Moore", "Midwest City", "Enid", "Stillwater", "Muskogee" ] }, { "name": "Wisconsin", "cities": [ "Milwaukee", "Madison", "Green Bay", "Kenosha", "Racine", "Appleton", "Waukesha", "Eau Claire", "Oshkosh", "Janesville", "West Allis", "La Crosse", "Sheboygan", "Wauwatosa", "Fond du Lac", "New Berlin", "Wausau", "Brookfield", "Greenfield", "Beloit" ] }, {
      "name": "Nevada",
      "cities": [ "Las Vegas", "Henderson", "Reno", "North Las Vegas", "Sparks", "Carson City" ]
    }, { "name": "New Mexico", "cities": [ "Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe", "Roswell", "Farmington", "Clovis" ] }, { "name": "Missouri", "cities": [ "Kansas City", "St. Louis", "Springfield", "Independence", "Columbia", "Lee's Summit", "O'Fallon", "St. Joseph", "St. Charles", "St. Peters", "Blue Springs", "Florissant", "Joplin", "Chesterfield", "Jefferson City", "Cape Girardeau" ] }, {
      "name": "Virginia",
      "cities": [ "Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Newport News", "Alexandria", "Hampton", "Roanoke", "Portsmouth", "Suffolk", "Lynchburg", "Harrisonburg", "Leesburg", "Charlottesville", "Danville", "Blacksburg", "Manassas" ]
    }, { "name": "Georgia", "cities": [ "Atlanta", "Columbus", "Augusta-Richmond County", "Savannah", "Athens-Clarke County", "Sandy Springs", "Roswell", "Macon", "Johns Creek", "Albany", "Warner Robins", "Alpharetta", "Marietta", "Valdosta", "Smyrna", "Dunwoody" ] }, { "name": "Nebraska", "cities": [ "Omaha", "Lincoln", "Bellevue", "Grand Island" ] }, {
      "name": "Minnesota",
      "cities": [ "Minneapolis", "St. Paul", "Rochester", "Duluth", "Bloomington", "Brooklyn Park", "Plymouth", "St. Cloud", "Eagan", "Woodbury", "Maple Grove", "Eden Prairie", "Coon Rapids", "Burnsville", "Blaine", "Lakeville", "Minnetonka", "Apple Valley", "Edina", "St. Louis Park", "Mankato", "Maplewood", "Moorhead", "Shakopee" ]
    }, { "name": "Kansas", "cities": [ "Wichita", "Overland Park", "Kansas City", "Olathe", "Topeka", "Lawrence", "Shawnee", "Manhattan", "Lenexa", "Salina", "Hutchinson" ] }, { "name": "Louisiana", "cities": [ "New Orleans", "Baton Rouge", "Shreveport", "Lafayette", "Lake Charles", "Kenner", "Bossier City", "Monroe", "Alexandria" ] }, { "name": "Hawaii", "cities": [ "Honolulu" ] }, { "name": "Alaska", "cities": [ "Anchorage" ] }, {
      "name": "New Jersey",
      "cities": [ "Newark", "Jersey City", "Paterson", "Elizabeth", "Clifton", "Trenton", "Camden", "Passaic", "Union City", "Bayonne", "East Orange", "Vineland", "New Brunswick", "Hoboken", "Perth Amboy", "West New York", "Plainfield", "Hackensack", "Sayreville", "Kearny", "Linden", "Atlantic City" ]
    }, { "name": "Idaho", "cities": [ "Boise City", "Nampa", "Meridian", "Idaho Falls", "Pocatello", "Caldwell", "Coeur d'Alene", "Twin Falls" ] }, { "name": "Alabama", "cities": [ "Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison", "Florence", "Gadsden" ] }, {
      "name": "Iowa",
      "cities": [ "Des Moines", "Cedar Rapids", "Davenport", "Sioux City", "Iowa City", "Waterloo", "Council Bluffs", "Ames", "West Des Moines", "Dubuque", "Ankeny", "Urbandale", "Cedar Falls" ]
    }, { "name": "Arkansas", "cities": [ "Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Pine Bluff", "Bentonville" ] }, { "name": "Utah", "cities": [ "Salt Lake City", "West Valley City", "Provo", "West Jordan", "Orem", "Sandy", "Ogden", "St. George", "Layton", "Taylorsville", "South Jordan", "Lehi", "Logan", "Murray", "Draper", "Bountiful", "Riverton", "Roy" ] }, {
      "name": "Rhode Island",
      "cities": [ "Providence", "Warwick", "Cranston", "Pawtucket", "East Providence", "Woonsocket" ]
    }, { "name": "Mississippi", "cities": [ "Jackson", "Gulfport", "Southaven", "Hattiesburg", "Biloxi", "Meridian" ] }, { "name": "South Dakota", "cities": [ "Sioux Falls", "Rapid City" ] }, { "name": "Connecticut", "cities": [ "Bridgeport", "New Haven", "Stamford", "Hartford", "Waterbury", "Norwalk", "Danbury", "New Britain", "Meriden", "Bristol", "West Haven", "Milford", "Middletown", "Norwich", "Shelton" ] }, {
      "name": "South Carolina",
      "cities": [ "Columbia", "Charleston", "North Charleston", "Mount Pleasant", "Rock Hill", "Greenville", "Summerville", "Sumter", "Goose Creek", "Hilton Head Island", "Florence", "Spartanburg" ]
    }, { "name": "New Hampshire", "cities": [ "Manchester", "Nashua", "Concord" ] }, { "name": "North Dakota", "cities": [ "Fargo", "Bismarck", "Grand Forks", "Minot" ] }, { "name": "Montana", "cities": [ "Billings", "Missoula", "Great Falls", "Bozeman" ] }, { "name": "Delaware", "cities": [ "Wilmington", "Dover" ] }, { "name": "Maine", "cities": [ "Portland" ] }, { "name": "Wyoming", "cities": [ "Cheyenne", "Casper" ] }, {
      "name": "West Virginia",
      "cities": [ "Charleston", "Huntington" ]
    }, { "name": "Vermont", "cities": [ "Burlington" ] } ];
    const citiesOfState = cities.find(data => data.name === state).cities;
    return citiesOfState.map((city, index) => <MenuItem key={index} value={city}>{city}</MenuItem>)

  }

  render() {
    const { prefix, data: { street, apt, zip, state, city, country }, errors: { streetError, zipError, stateError, cityError, countryError } } = this.props
    return (
      <Container fluid className="px-0">
        <FormControl className="w-60" error={!!streetError}>
          <TextField
            id={`${prefix}Street`}
            className="inputField mr-2 mt-3 mb-1"
            label="Street address"
            value={street}
            onChange={this.props.handleChange(prefix + 'Address', 'street')}
            variant="outlined"
            error={!!streetError}
          />
          <FormHelperText className="mt-0">{streetError}</FormHelperText>
        </FormControl>
        <FormControl className="w-40">
          <TextField
            id={`${prefix}Apt`}
            className="inputField ml-2 mt-3 mb-1"
            label="Apt/Suite (Optional)"
            value={apt}
            onChange={this.props.handleChange(prefix + 'Address', 'apt')}
            variant="outlined"
          />
        </FormControl>
        <FormControl className="w-33" error={!!zipError}>
          <TextField
            id={`${prefix}Zip`}
            className="inputField mr-2 mt-3 mb-1"
            label="Zip"
            value={zip}
            onChange={this.props.handleChange(prefix + 'Address', 'zip')}
            variant="outlined"
            error={!!zipError}
          />
          <FormHelperText className="mt-0">{zipError}</FormHelperText>
        </FormControl>
        <FormControl className="w-33" error={!!stateError}>
          <Select
            id={`${prefix}State`}
            className="selectField mr-2 mt-3 mb-1"
            value={state}
            onChange={this.props.handleChange(prefix + 'Address', 'state')}
            name={`${prefix}State`}
            error={!!stateError}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select State
            </MenuItem>
            {this.renderStateOptions()}
          </Select>
          <FormHelperText className="mt-0">{stateError}</FormHelperText>
        </FormControl>
        <FormControl className="w-33" error={!!cityError} disabled={!state}>
          <Select
            id={`${prefix}City`}
            className="selectField mr-2 mt-3 mb-1"
            value={city}
            onChange={this.props.handleChange(prefix + 'Address', 'city')}
            name={`${prefix}City`}
            error={!!cityError}
            displayEmpty
          >
            <MenuItem value="" disabled>
              Select City
            </MenuItem>
            {!!state && this.renderCityOptions(state)}
          </Select>
          <FormHelperText className="mt-0">{cityError}</FormHelperText>
        </FormControl>
        <FormControl className="w-100" error={!!countryError}>
          <TextField
            id={`${prefix}Country`}
            className="inputField mr-2 mt-3 mb-1"
            label="Country"
            value={country}
            onChange={this.props.handleChange(prefix + 'Address', 'country')}
            variant="outlined"
            error={!!countryError}
          />
          <FormHelperText className="mt-0">{countryError}</FormHelperText>
        </FormControl>
      </Container>
    )
  }
}

