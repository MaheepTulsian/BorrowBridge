import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  wallet_id: {
    type: String,
  },
  user_Type: {
    type: String ,
    default: "localUser"
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
      Date_of_investment: String,
    },
  ],
  Borrowed: [
    {
      oppurtunity_id: String,
      title: String,
      Amount_Borrowed: Number,
      outstand_Amount: Number,
      Date_of_Borrow_Request: String,
    },
  ],
  Amount_Total_Invested: Number,
});

const User = mongoose.model("User", userSchema);

export default User;
