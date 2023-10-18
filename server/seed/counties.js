//step 4 -->
//purpose = fill the database collections with actual data about the rehabs, counties, and detox centers
//Use Mongo shell (mongosh), or a query.js file, to read the data BECAUSE: -->
//This data is being stored on the server, we cannot access it online (yet) or directly in our terminal.
//our terminal is for what's being stored on our computer

//QUESTION: where is the data stored/what server?

//pulling in our db and models
const db = require("../db");
//searching for relevant variables within the models folder:
const { County } = require("../models"); 
// const { Detox } = require("../models");
// const { Rehab } = require("../models");

//connecting to the db / giving us an error if anything goes wrong
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//because we are taking a quick detour out of JS and into Mongo, we need to make sure these are all async functions. 
//That way, even if it only takes .01 seconds, code-lines won't get thrown out of order
const main = async () => {
  const counties = [
    {name: "Bronx County", rankinwealth: 5},
    {name: "New York County", rankinwealth: 2},
    {name: "Richmond County", rankinwealth: 1},
    {name: "Kings County", rankinwealth: 4},
    {name: "Queens County", rankinwealth: 3},
    {name: "Sullivan County"}
  ];
  await County.insertMany(counties);
  console.log("Created counties!");
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
