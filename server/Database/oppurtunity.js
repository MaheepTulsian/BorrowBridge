import mongoose from "mongoose";

const oppo_schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Thumbnail: {
    type: String,
    required: true,
  },
  duration_of_time: {
      type: Number,
      type: Date,
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

  Total_Amount_Collected: {
    type: Number,
    default: 0
  },
  Investors:[
    {
        wallet_id:{
            type: String,
        },
        Amount_Investment:{
            type: Number,
            
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
