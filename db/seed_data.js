use monopoly;
db.dropDatabase();
db.properties.insertMany(

[{
    position: 0,
    name: "GO",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 1
  },
  {
    position: 1,
    name: "Old Kent Road",
    color: "Brown",
    price: 60,
    rent_status: 0,
    owner: "",
    rent: [2,4,10,30,90,160,250],
    other_properties: [3],
    mortgaged: false,
    row: 1
  },
  {
    position: 2,
    name: "Community Chest",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 1
  },
  {
    position: 3,
    name: "White Chapel Road",
    color: "Brown",
    price: 60,
    rent_status: 0,
    owner: "",
    rent: [4,8,20,60,180,320,450],
    other_properties: [1],
    mortgaged: false,
    row: 1
  },
  {
    position: 4,
    name: "Income Tax",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Government",
    rent: [200],
    other_properties: [],
    mortgaged: false,
    row: 1
  },
  {
    position: 5,
    name: "King's Cross Station",
    color: "",
    price: 200,
    rent_status: 0,
    owner: "",
    rent: [25,50,100,200],
    other_properties: [15,25,35],
    mortgaged: false,
    row: 1
  },
  {
    position: 6,
    name: "The Angel Islington",
    color: "LightBlue",
    price: 100,
    rent_status: 0,
    owner: "",
    rent: [6,12,30,90,270,400,550],
    other_properties: [8,9],
    mortgaged: false,
    row: 1
  },
  {
    position: 7,
    name: "Chance",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 1
  },
  {
    position: 8,
    name: "Euston Road",
    color: "LightBlue",
    price: 100,
    rent_status: 0,
    owner: "",
    rent: [6,12,30,90,270,400,550],
    other_properties: [6,9],
    mortgaged: false,
    row: 1
  },
  {
    position: 9,
    name: "Pentonville Road",
    color: "LightBlue",
    price: 120,
    rent_status: 0,
    owner: "",
    rent: [8,16,40,100,300,450,600],
    other_properties: [6,8],
    mortgaged: false,
    row: 1
  },
  {
    position: 10,
    name: "Jail",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 2
  },
  {
    position: 11,
    name: "Pall Mall",
    color: "Pink",
    price: 140,
    rent_status: 0,
    owner: "",
    rent: [10,20,50,150,450,625,750],
    other_properties: [13,14],
    mortgaged: false,
    row: 2
  },
  {
    position: 12,
    name: "Electric Company",
    color: "",
    price: 150,
    rent_status: 0,
    owner: "",
    rent: [4,10],
    other_properties: [28],
    mortgaged: false,
    row: 2
  },
  {
    position: 13,
    name: "Whitehall",
    color: "Pink",
    price: 140,
    rent_status: 0,
    owner: "",
    rent: [10,20,50,150,450,625,750],
    other_properties: [11,14],
    mortgaged: false,
    row: 2
  },
  {
    position: 14,
    name: "Northumberland Avenue",
    color: "Pink",
    price: 160,
    rent_status: 0,
    owner: "",
    rent: [12,24,60,180,500,700,900],
    other_properties: [11,13],
    mortgaged: false,
    row: 2
  },
  {
    position: 15,
    name: "Marylebone Station",
    color: "",
    price: 200,
    rent_status: 0,
    owner: "",
    rent: [25,50,100,200],
    other_properties: [5,25,35],
    mortgaged: false,
    row: 2
  },
  {
    position: 16,
    name: "Bow Street",
    color: "Orange",
    price: 180,
    rent_status: 0,
    owner: "",
    rent: [14,28,70,200,550,750,950],
    other_properties: [18,19],
    mortgaged: false,
    row: 2
  },
  {
    position: 17,
    name: "Community Chest",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 2
  },
  {
    position: 18,
    name: "Marlborough Street",
    color: "Orange",
    price: 180,
    rent_status: 0,
    owner: "",
    rent: [14,28,70,200,550,750,950],
    other_properties: [16,19],
    mortgaged: false,
    row: 2
  },
  {
    position: 19,
    name: "Vine Street",
    color: "Orange",
    price: 200,
    rent_status: 0,
    owner: "",
    rent: [16,32,80,220,600,800,1000],
    other_properties: [16,18],
    mortgaged: false,
    row: 2
  },
  {
    position: 20,
    name: "Free Parking",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 3
  },
  {
    position: 21,
    name: "Strand",
    color: "Red",
    price: 220,
    rent_status: 0,
    owner: "",
    rent: [18,36,90,250,700,875,1050],
    other_properties: [23,24],
    mortgaged: false,
    row: 3
  },
  {
    position: 22,
    name: "Chance",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 3
  },
  {
    position: 23,
    name: "Fleet Street",
    color: "Red",
    price: 220,
    rent_status: 0,
    owner: "",
    rent: [18,36,90,250,700,875,1050],
    other_properties: [21,24],
    mortgaged: false,
    row: 3
  },
  {
    position: 24,
    name: "Trafalgar Square",
    color: "Red",
    price: 240,
    rent_status: 0,
    owner: "",
    rent: [20,40,100,300,750,925,1100],
    other_properties: [21,23],
    mortgaged: false,
    row: 3
  },
  {
    position: 25,
    name: "Fenchurch Street Station",
    color: "",
    price: 200,
    rent_status: 0,
    owner: "",
    rent: [25,50,100,200],
    other_properties: [5,15,35],
    mortgaged: false,
    row: 3
  },
  {
    position: 26,
    name: "Leicester Square",
    color: "Yellow",
    price: 260,
    rent_status: 0,
    owner: "",
    rent: [22,44,110,330,800,975,1150],
    other_properties: [27,29],
    mortgaged: false,
    row: 3
  },
  {
    position: 27,
    name: "Coventry Street",
    color: "Yellow",
    price: 260,
    rent_status: 0,
    owner: "",
    rent: [22,44,110,330,800,975,1150],
    other_properties: [26,29],
    mortgaged: false,
    row: 3
  },
  {
    position: 28,
    name: "Water Works",
    color: "",
    price: 150,
    rent_status: 0,
    owner: "",
    rent: [4,10],
    other_properties: [12],
    mortgaged: false,
    row: 3
  },
  {
    position: 29,
    name: "Piccadilly",
    color: "Yellow",
    price: 280,
    rent_status: 0,
    owner: "",
    rent: [22,44,120,360,850,1025,1200],
    other_properties: [26,27],
    mortgaged: false,
    row: 3
  },
  {
    position: 30,
    name: "Go to Jail",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 4
  },
  {
    position: 31,
    name: "Regent Street",
    color: "Green",
    price: 300,
    rent_status: 0,
    owner: "",
    rent: [26,52,130,390,900,1100,1275],
    other_properties: [32,34],
    mortgaged: false,
    row: 4
  },
  {
    position: 32,
    name: "Oxford Street",
    color: "Green",
    price: 300,
    rent_status: 0,
    owner: "",
    rent: [26,52,130,390,900,1100,1275],
    other_properties: [31,34],
    mortgaged: false,
    row: 4
  },
  {
    position: 33,
    name: "Community Chest",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 4
  },
  {
    position: 34,
    name: "Bond Street",
    color: "Green",
    price: 320,
    rent_status: 0,
    owner: "",
    rent: [28,56,150,450,1000,1200,1400],
    other_properties: [31,32],
    mortgaged: false,
    row: 4
  },
  {
    position: 35,
    name: "Liverpool Street Station",
    color: "",
    price: 200,
    rent_status: 0,
    owner: "",
    rent: [25,50,100,200],
    other_properties: [5,15,25],
    mortgaged: false,
    row: 4
  },
  {
    position: 36,
    name: "Chance",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Admin",
    rent: [],
    other_properties: [],
    mortgaged: false,
    row: 4
  },
  {
    position: 37,
    name: "Park Lane",
    color: "DarkBlue",
    price: 350,
    rent_status: 0,
    owner: "",
    rent: [35,70,175,500,1100,1300,1500],
    other_properties: [39],
    mortgaged: false,
    row: 4
  },
  {
    position: 38,
    name: "Super Tax",
    color: "",
    price: 0,
    rent_status: 0,
    owner: "Government",
    rent: [100],
    other_properties: [],
    mortgaged: false,
    row: 4
  },
  {
    position: 39,
    name: "Mayfair",
    color: "DarkBlue",
    price: 400,
    rent_status: 0,
    owner: "",
    rent: [50,100,200,600,1400,1700,2000],
    other_properties: [37],
    mortgaged: false,
    row: 4
  }
])
