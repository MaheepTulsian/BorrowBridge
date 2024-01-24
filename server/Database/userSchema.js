import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    wallet_id: {
      type: String,
    },
    user_Type: {
      type: String,
      default: "localUser",
    },
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Investment: [
      {
        oppurtunity_id: String,
        title: String,
        Amount_Investment: Number,
        Date_of_investment: {
          type: String,
          default: Date.now(),
        },
      },
    ],
    Borrowed: [
      {
        oppurtunity_id: String,
        title: String,
        Amount_Borrowed: Number,
        outstand_Amount: Number,
        Date_of_Borrow_Request: {
          type: String,
          default: Date.now(),
        },
      },
    ],
    Total_Amount_Invested: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
