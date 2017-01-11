var Dealer = require('../models/dealer');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/neodb');
dealers = [
  { title: "Arcl`inea" , address: "201 Henry Adams Street, San Francisco,CA" },
  { title: "Blue Plum" , address: "41 Arkansas St, San Francisco,CA" },
  { title: "Cabinets and Beyond" , address: "1219 Harrison Street, San Francisco,CA" },
  { title: "Domicile" , address: "680 8th St, San Francisco,CA" },
  { title: "Ferguson Bath & Kitchen Gallery" , address: "435 Valencia St, San Francisco,CA" },
  { title: "Floorcraft" , address: "470 Bay Shore Blvd, San Francisco,CA" },
  { title: "Fox Marble" , address: "1315 Armstrong Ave, San Francisco,CA" },
  { title: "Gilmans Kitchen and Bath" , address: "228 Bayshore Blvd, San Francisco,CA" },
  { title: "Kitchen Matrix" , address: "101 Henry Adams St, Suite 410, San Francisco,CA" },
  { title: "Kitchen Sync" , address: "1752 Church St, San Francisco,CA" },
  { title: "Poliform" , address: "101 Henry Adams St, Suite 325, San Francisco,CA" },
  { title: "Quality Kitchen & Bath" , address: "1665 Mission St, San Francisco,CA" },
  { title: "SieMatic" , address: "235 1st Street, San Francisco,CA" },
  { title: "Sozo Studio" , address: "111 Rhode Island St, San Francisco,CA" },
  { title: "Studio Becker" , address: "680 8th St #153, San Francisco,CA" },
  { title: "Timeless Kitchens" , address: "1750 Yosemite Ave, San Francisco, CA" },
  { title: "Townsend Kitchen and Bath" , address: "590 Townsend Street, San Francisco,CA" },
  { title: "Williams Sonoma" , address: "340 Post St, San Francisco,CA" },
  { title: "Atherton Appliance & Kitchens" , address: "95 Veterans Boulevard, Redwood City,CA" },
  { title: "Artistic Stone Kitchen and Bath" , address: "2407 E Charleston Road, Mountain View,CA" },
  { title: "CornerStone" , address: "168 Marco Way, South San Francisco,CA" },
  { title: "Countertop Store of San Carlos" , address: "151 Old Country Rd, San Carlos,CA" },
  { title: "Da Vinci Marble" , address: "1480 Industrial Rd, San Carlos,CA" },
  { title: "European Cabinets and Design Studio" , address: "864 San Antonio Road, Palo Alto,CA" },
  { title: "Kitchens by Meyer" , address: "861 E El Camino Real, Mountain View,CA" },
  { title: "Kitchens of Los Altos" , address: "155 Main Street, Los Altos,CA" },
  { title: "Stoneman Fabricators" , address: "83 37th Avenue, San Mateo,CA" },
  { title: "The Countertop Store" , address: "151 Old Country Rd, Suite F, San Carlos,CA" },
  { title: "University Electric" , address: "1500 Martin Ave, Santa Clara,CA" },
  { title: "All Natural Stone" , address: "2504 Seaboard Avenue, San Jose,CA" },
  { title: "Carmel Stone Imports" , address: "15779 Winfield Blvd, San Jose,CA" },
  { title: "Ultimate Kitchen & Bath" , address: "5779 Winfield Blvd Ste A1, San Jose,CA" },
  { title: "United Marble and Granite" , address: "2163 Martin Ave, Santa Clara,CA" },
  { title: "C.L. Frost" , address: "1831 East Ave, Sand City,CA" },
  { title: "Kitchen Studios of Monterey Peninsula" , address: "1096 Canyon Del Ray Blvd, Seaside,CA" },
  { title: "Rinaldi Tile and Marble" , address: "51 Fremont Street, Watsonville,CA" },
  { title: "Artistic Stone Kitchen and Bath" , address: "2973 Teagarden Street, San Leandro,CA" },
  { title: "Custom Kitchens" , address: "6624 Telegraph Ave, Oakland,CA" },
  { title: "Custom Stone" , address: "2999 Teagarden St, San Leandro,CA" },
  { title: "Douglah Designs" , address: "3586 Mt Diablo Blvd, Lafayette,CA" },
  { title: "Ecohome Improvement" , address: "2619 San Pablo Ave, Berkeley,CA" },
  { title: "New Century Marble and Granite" , address: "2500 Teagarden Steet Suite B, San Leandro,CA" },
  { title: "Palazzo Kitchen and Baths" , address: "1256 Diamond Way, Concord,CA" },
  { title: "Planet Stone" , address: "970 Detroit Ave # G, Concord,CA" },
  { title: "Premier Kitchens" , address: "3373 Mt Diablo Blvd, Lafayette ,CA" },
  { title: "Quality Marble and Granite" , address: "25 Hegenburger Place , Oakland,CA" },
  { title: "Style Kitchen and Bath", address: "134 98th Ave, Oakland,CA" },
  { title: "Sullivan Countertops" , address: "1189 65th Street, Oakland,CA" },
  { title: "ilmans Kitchen and Bath" , address: "530 Francisco Blvd, San Rafael,CA" },
  { title: "Hearth & Home" , address: "902 Lincoln Ave, San Rafael,CA" },
  { title: "Hudson Street Design of Healdsburg" , address: "434 Hudson St, Healdsburg,CA" },
  { title: "Hudson Street Design of Marin" , address: "3773 Redwood Hwy, Marin,CA" },
  { title: "Marin Cabinet Studio" , address: "1012 Magnolia Ave, Larkspur,CA" },
  { title: "Marin Kitchens" , address: "1385 Francisco Blvd. East, San Rafael,CA" },
  { title: "Marin Kitchen Works" , address: "285 Bel Marin Keys, Novato,CA" },
  { title: "Munoz Tile" , address: "1302 Holm Rd, Petaluma,CA" },
  { title: "North Coast Tile and Stone" , address: "3845 Santa Rosa Ave, Santa Rosa,CA" },
  { title: "NV Design" , address: "1506 Main St, Napa,CA" },
  { title: "Outdora" , address: "128 West Napa Street, Sonoma,CA" },
  { title: "Polsky Perlstein Architects" , address: "469 Magnolia Avenue, Larkspur,CA" },
  { title: "Surface Arts" , address: "443 Allan Court, Healdsburg,CA" },
  { title: "American Kitchen Cabinets" , address: "386 Placerville Dr, Placerville,CA" },
  { title: "BI Design Studio" , address: "1004 White Rock Rd, El Dorado Hills,CA" },
  { title: "Counter Fit" , address: "6925 Roseville Rd, Sacramento,CA" },
  { title: "Kitchen Design Center" , address: "1415 Fulton Ave, Sacramento,CA" },
  { title: "Palm Tile Sacramento" , address: "9778 Business Park Drive, Sacramento,CA" },
  { title: "Blue Coyote Bar & Grill" , address: "10015 Palisades Dr, Truckee,CA" },
  { title: "Mountain Modern Kitchen & Bath Design Center Building Materials Store" , address: "265 N Lake Blvd, Tahoe City,CA" },
  { title: "Artisan Stone Gallery" , address: "1325 Capital Blvd, Reno, NV" },
  { title: "Cabinet & Lighting" , address: "6970 S. Virginia St, Reno, NV" },
  { title: "Home Concepts" , address: "10198 Church St, Truckee,CA" },
  { title: "Osborne & Dermody" , address: "605 Glendale Ave, Sparks, NV" },
  { title: "The Tuscany Collection" , address: "6125 S Valley View Boulevard, Las Vegas, NV" }
];
Dealer.remove({}, function(err) {
  if (err) {
    console.log(err);
  } else {
    Dealer.create(dealers, function(err, dealers) {
      if(err) {
        console.log(err);
      }
        else {
          console.log("created :", dealers);
          mongoose.connection.close();
        }
    });
  }
});
