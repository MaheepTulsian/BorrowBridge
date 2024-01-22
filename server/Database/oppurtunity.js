import mongoose from ("mongoose");

const oppo_schema = mongoose.Schema({
  oppurtunity_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  Thumbnail: {
    type: String,
  },
  Description: {
    type: String,
    required: true,
  },
  contact_Details: {
    type: String,
    required: true,
  },
  pitch_Pdf: {
    type: String,
    required: true,
  },
  Token: {
    type: Number,
    required: true,
  },
  Amount_Collected: {
    type: Number,
    required: true,
  },
});

const Oppo = mongoose.model("Oppo", oppo_schema);
module.exports = oppo;
