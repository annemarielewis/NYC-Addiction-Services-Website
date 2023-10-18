//step 2 -->
//purpse = create schemas (set of rules) for collections

const { Schema } = require("mongoose");

const DetoxSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    address: { type: String, required: true },
    county: { type: Schema.Types.ObjectId, ref: "County._id", required: true },
    rehab: { type: Schema.Types.ObjectId, ref: "Rehab._id", required: false },
    url: { type: String, required: true }, //rehab refers to if the detox facility has an onsite rehab as well
  },
  { timestamps: true }
);

module.exports = DetoxSchema;