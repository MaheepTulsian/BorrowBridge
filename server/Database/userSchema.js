const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  wallet_id: {
    type: String,
  },

  user_Type: {
    type: String,
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
      Date_ofinvestment: Number,
    },
  ],
  Borrowed: [
    {
      oppurtunity_id: String,
      title: String,
      Amount_Borrowed: Number,
      outstand_Amount: Number,
      Date_of_Borrow_Request: Number,
    },
  ],
  Amount_Total_Invested: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
