//step 4 -->
//purpose = fill the database collections with actual data about the rehabs, boroughs, and detox centers
//Use Mongo shell (mongosh), or a query.js file, to read the data BECAUSE: -->
//This data is being stored on the server, we cannot access it online (yet) or directly in our terminal.
//our terminal is for what's being stored on our computer

//QUESTION: where is the data stored/what server?

//pulling in our db and models
const db = require("../db");
//searching for relevant variables within the models folder:
const { Detox } = require("../models");
const { County } = require("../models");

//connecting to the db / giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions.
//That way, even if it only takes .01 seconds, code-lines won't get thrown out of order
const main = async () => {
  const BronxCounty = await County.find({
    name: "Bronx County",
  });

  const KingsCounty = await County.find({
    name: "Kings County",
  });
  const QueensCounty = await County.find({
    name: "Queens County",
  });
  console.log(QueensCounty);

  const RichmondCounty = await County.find({
    name: "Richmond County",
  });

  const NewYorkCounty = await County.find({
    name: "New York County",
  });

  const detoxes = [
    {
      name: "New York and Presbyterian Hospital",
      number: "(212) 746-1252",
      address: "503 East 70th Street, New York, NY 10021",
      county: NewYorkCounty[0]._id,
      url: "https://www.detoxrehabs.net/centers/new-york-presbyterian-hospital-14/",
    },

    {
      name: "Addiction Institute at Mt. Sinai West",
      number: "212-523-6491",
      address: "1000 10th Avenue Floor 8 New York, NY 10019",
      county: NewYorkCounty[0]._id,
      url: "https://www.mountsinai.org/locations/addiction-institute/services/inpatient",
    },

    {
      name: "The Brooklyn Hospital Detox Center",
      number: "(718) 250-8900",
      address: "Main Hospital: 9th Floor 121 DeKalb Avenue Brooklyn, NY 11201",
      county: KingsCounty[0]._id,
      url: "https://www.tbh.org/specialized-services/detox-unit",
    },

    {
      name: "Interfaith Medical Center",
      number: "(718) 613-4000",
      address: "1545 Atlantic Avenue, Brooklyn, NY 11213",
      county: KingsCounty[0]._id,
      url: "https://www.detoxlocal.com/listing/interfaith-medical-center-brooklyn-ny-4/",
    },
  ];
  await Detox.deleteMany();
  let createDetox= await Detox.insertMany(detoxes);
  console.log(createDetox)
  console.log("Created detox centers!");
};

//we keep these functions seperate so they can each run independently (atomically) and perform their necessary task -->
//it will prevent a lot of errors
const run = async () => {
  //runs our main function and awaits for the data to populate
  await main();
  //closes our db after its run so things don't break
  db.close();
};

run();
