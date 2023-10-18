//step 3 -->
//purpose = export all of the schemas and what they symbolize into a mongoose model -->
//the collections will be added to this model (when seeded) -->
//When seeding, we name the actual data that we are adding before the {}. This is the collection name. 
//Once we add data to the model, we refer to it by its collection name
//We have the counties, detoxes, rehabs collections (see seeding files for reference)

const mongoose = require("mongoose");

//accessing the info from the other files in the models folder:
const CountySchema = require("./county");
const DetoxSchema = require("./detox");
const RehabSchema = require("./rehab");

const County = mongoose.model("County", CountySchema);
//The mongoose.model method is used to define a model. It takes two arguments:
//The first argument specifies the name of the MongoDB collection where documents with this schema will be stored.
//The second argument is the schema that defines the structure and validation rules for documents in the collection.
const Detox = mongoose.model("Detox", DetoxSchema);
const Rehab = mongoose.model("Rehab", RehabSchema);

// This line exports the Mongoose models you've created,
//allowing you to use them in other parts of your Node.js application:
module.exports = {
  County,
  Detox,
  Rehab,
};
