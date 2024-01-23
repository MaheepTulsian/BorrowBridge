import mongoose from "mongoose";

const oppo_schema = mongoose.Schema(
  {
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
      type: Number,
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
