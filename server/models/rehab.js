//step 2 -->
//purpse = create schemas (set of rules) for collections

const { Schema } = require("mongoose");

const RehabSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
    coconditions: { type: Boolean, required: false }, //coconditions refers to whether or not the rehab also treats co-occurant conditions
    detox: { type: Boolean, required: true }, //detox refers to if the rehab facility has an onsite detox service as well
    sexseparated: { type: Boolean, required: true },
    address: { type: String, required: true },
    county: {
      type: Schema.Types.ObjectId,
      ref: "County._id",
      required: true,
    },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = RehabSchema;
