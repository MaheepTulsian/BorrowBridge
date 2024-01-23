import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
const oppo_schema = mongoose.Schema(
  {
    oppurtunity_id: {
      type: String,
      default: uuidv4(), // Set a default value using the uuid library
      unique: true,
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
    },
    Location: {
      type: String,
      required: true,
    },
    Amount: {
      type: Number,
    },
    Interest: {
      type: Number,
    },
    amount_to_be_retured: {
      type: Number,
    },
    duration_of_time: {
      type: Date,
      default: Date.now(),
    },

    Amount_Collected: {
      type: Number,
    },

    Investors: [
      {
        wallet_id: {
          type: String,
        },
        Amount: {
          type: Number,
        },
      },
    ],
    Status: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Oppo = mongoose.model("Oppo", oppo_schema);
export default Oppo;
