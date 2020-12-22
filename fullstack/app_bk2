var express = require('express');
var app = express();
var port = 8700;
var hotelRouter = express.Router();
var cityRouter = express.Router();

var hotels=[
    {
      "_id": "1",
      "name": "Roseate House",
      "city_name": "New Delhi",
      "city": "1",
      "locality": "Aerocity, New Delhi",
      "thumb": "https://i.ibb.co/pv8Kf4m/roseate.jpg",
      "cost": 8399,
      "address": "Plot No 10, GMR Hospitality District, Indira Gandhi International Airport, Aerocity",
      "type": [
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        },
        {
          "roomtype": "4",
          "name": "Semi Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        }
      ],
      "tripType": [
        {
          "trip": "1",
          "name": "Business"
        },
        {
          "trip": "2",
          "name": "Holiday"
        }
      ]
    },
    {
      "_id": "2",
      "name": "Pride Plaza Hotel ",
      "city_name": "New Delhi",
      "city": "1",
      "locality": "Aerocity, New Delhi",
      "thumb": "https://i.ibb.co/5nKNcz1/pride.jpg",
      "cost": 4000,
      "address": "Asset 5-A, Hospitality District, Aerocity, IGI Airport , New Delhi",
      "type": [
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        },
        {
          "roomtype": "3",
          "name": "Budget Room"
        }
      ],
      "tripType": [
        {
          "trip": "1",
          "name": "Business"
        },
        {
          "trip": "2",
          "name": "Holiday"
        }
      ]
    },
    {
      "_id": "3",
      "name": "The Piccadily",
      "city_name": "New Delhi",
      "city": "1",
      "locality": "Janakpuri, New Delhi",
      "thumb": "https://i.ibb.co/QD1RRBk/piccadily.jpg",
      "cost": 5170,
      "address": "Janakpuri, District Centre Complex, Near Janak Puri West Metro Station",
      "type": [
        {
          "roomtype": "3",
          "name": "Budget Room"
        },
        {
          "roomtype": "4",
          "name": "Semi Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        }
      ],
      "tripType": [
        {
          "trip": "4",
          "name": "Luxury"
        },
        {
          "trip": "3",
          "name": "Travel"
        }
      ]
    },
    {
      "_id": "4",
      "name": "The Ashtan Sarovar Portico",
      "city_name": "New Delhi",
      "city": "1",
      "locality": "Greenpark, New Delhi",
      "thumb": "https://i.ibb.co/TbVsznT/sarovar.jpg",
      "cost": 8399,
      "address": "C2, Green park Extension, Green Park Extn, Behind Gurudwara, Nr Greenpark Metro Station, New Delhi",
      "type": [
        {
          "roomtype": "3",
          "name": "Budget Room"
        },
        {
          "roomtype": "4",
          "name": "Semi Deluxe Room"
        },
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        }
      ],
      "tripType": [
        {
          "trip": "4",
          "name": "Luxury"
        },
        {
          "trip": "3",
          "name": "Travel"
        }
      ]
    },
    {
      "_id": "5",
      "name": "The Taj Mahal Palace",
      "city_name": "Mumbai",
      "city": "2",
      "locality": "Apollo Bunder, Mumbai",
      "thumb": "https://i.ibb.co/W0z1JCF/tajmahal.jpg",
      "cost": 16500,
      "address": "Apollo Bunder, Mumbai, Maharashtra",
      "type": [
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        },
        {
          "roomtype": "4",
          "name": "Semi Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        }
      ],
      "tripType": [
        {
          "trip": "4",
          "name": "Luxury"
        },
        {
          "trip": "3",
          "name": "Travel"
        }
      ]
    },
    {
      "_id": "6",
      "name": "Rodas - An Ecotel Hotel",
      "city_name": "Mumbai",
      "city": "2",
      "locality": "Powai, Mumbai",
      "thumb": "https://i.ibb.co/N1Hztfy/rodas.jpg",
      "cost": 4254,
      "address": "Central Avenue, Hiranandani Gardens, Powai, Mumbai - 400076",
      "type": [
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        },
        {
          "roomtype": "3",
          "name": "Budget Room"
        }
      ],
      "tripType": [
        {
          "trip": "4",
          "name": "Luxury"
        },
        {
          "trip": "3",
          "name": "Travel"
        }
      ]
    },
    {
      "_id": "7",
      "name": "ITC Maratha",
      "city_name": "Mumbai",
      "city": "2",
      "locality": "Andheri, Mumbai",
      "thumb": "https://i.ibb.co/55nZq20/itcmaratha.jpg",
      "cost": 8399,
      "address": "Sahar, Andheri (E) Mumbai Maharashtra",
      "type": [
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        },
        {
          "roomtype": "4",
          "name": "Semi Deluxe Room"
        }
      ],
      "tripType": [
        {
          "trip": "1",
          "name": "Business"
        },
        {
          "trip": "2",
          "name": "Holiday"
        }
      ]
    },
    {
      "_id": "8",
      "name": "Trident Nariman Point",
      "city_name": "Mumbai",
      "city": "2",
      "locality": "Nariman Point, Mumbai",
      "thumb": "https://i.ibb.co/p3Dhc3q/trident.jpg",
      "cost": 4000,
      "address": "CR 2 Nariman Point, Netaji Subhash Chandra Bose Road",
      "type": [
        {
          "roomtype": "1",
          "name": "Deluxe Room"
        },
        {
          "roomtype": "2",
          "name": "Premiere Rooms"
        },
        {
          "roomtype": "3",
          "name": "Budget Room"
        }
      ],
      "tripType": [
        {
          "trip": "1",
          "name": "Business"
        },
        {
          "trip": "2",
          "name": "Holiday"
        }
      ]
    }
  ]

var city=[
    {
        "_id": 1,
        "city_name": "Delhi",
        "city": 1,
        "country_name": "India"
      },
      {
        "_id": 3,
        "city_name": "Pune",
        "city": 3,
        "country_name": "India"
      },
      {
        "_id": 2,
        "city_name": "Mumbai",
        "city": 2,
        "country_name": "India"
      },
      {
        "_id": 4,
        "city_name": "Chandigarh",
        "city": 4,
        "country_name": "India"
      },
      {
        "_id": 5,
        "city_name": "Goa",
        "city": 5,
        "country_name": "India"
      },
      {
        "_id": 6,
        "city_name": "Manali",
        "city": 6,
        "country_name": "India"
      }
]

app.get('/',function(req,res){
    res.send("Welcome to NodeJs")
});

hotelRouter.route('/')
    .get(function(req,res){
        res.send(hotels)
    });

hotelRouter.route('/details')
    .get(function(req,res){
        res.send('Hotel Details')
    });

cityRouter.route('/')
    .get(function(req,res){
        res.send(city)
    });

cityRouter.route('/details')
    .get(function(req,res){
        res.send('City Details')
    });

app.use('/hotel',hotelRouter);
app.use('/city',cityRouter);

app.listen(port,function(err){
    if(err) throw err;
    console.log("Server is running on port 8700")
});