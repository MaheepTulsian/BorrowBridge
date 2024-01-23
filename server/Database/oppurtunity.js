import mongoose from "mongoose";

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
    required: true,
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
  token_Requested: {
    type: Number,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },

  Amount_Collected: {
    type: Number,
    required: true,
  },
  Investors:[
    {
        wallet_id:{
            type: String,
            required: true
        },
        Amount:{
            type: Number,
            required: true
        },
    },  
  ],
  Status: [
    {
        type: String
    }
  ]},
  {
    timestamps: true,
  }
);

const Oppo = mongoose.model("Oppo", oppo_schema);
export default Oppo;
