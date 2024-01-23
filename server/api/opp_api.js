import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import db from "../Database/connect.js";
import User from "../../server/Database/userSchema.js";
import Oppo from "../../server/Database/oppurtunity.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("I am live");
});

//adding opportunity_id in database in opportunity collection
app.post("/api/opps", async (req, res) => {
  try {
    const oppo = await Oppo.create(req.body);
    res.status(200).json(oppo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

//searching all opportunity
app.get("/api/opps/allopps", async (req, res) => {
  try {
    const oppo = await Oppo.find();
    res.status(200).json(oppo);
    if (oppo.length === 0) {
      return res.status(404).json({ message: "Cannot find any oppurtunity" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});


//searching opportunity by opportunity_id
app.get("/api/opps/:oppid" , async(req, res)=>{
  try{
    const oppo = await Oppo.find({ oppurtunity_id : req.params.oppid});



    if (oppo.length === 0) {
      return res
        .status(404)
        .json({ message: "Cannot find user with the given oppurinity ID" });
    }

    res.status(200).json(oppo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// adding user in database in user collection
app.post("/api/add", async (req, res) => {
  try {
    const user = new User(req.body);
    await user
      .save()
      .then((saveduser) => {
        console.log("User saved:", saveduser);
      })
      .catch((error) => {
        console.error("Error saving user:", error.message);
      });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//searching user by wallet id
app.get("/api/wallet/:wallet_id", async (req, res) => {
  try {
    const user = await User.find({ wallet_id: req.params.wallet_id });

    if (user.length === 0) {
      return res
        .status(404)
        .json({ message: "Cannot find user with the given wallet ID" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

//updating opportunity status
app.put("/api/opps/:oppurtunity_id/status/:Status", async (req, res) => {
  try {
    const oppurtunityId = req.params.oppurtunity_id;
    const newStatus = req.params.Status;

    const user = await User.find({ oppurtunity_id: oppurtunityId});

    if (!user) {
      return res
        .status(404)
        .json({ message: "Cannot find user with the given wallet ID" });
    }

    await User.findOneAndUpdate(
      { oppurtunity_id: oppurtunityId },
      { $set: { Status: newStatus } }
    );

    res.status(200).json({ message: "Status updated successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

//INVEST WEB3js function
app.put("/api/invest/wallet/:wallet_id/oppurtunity_id/:oppurtunity_id", async (req, res) => {
  try {
    const wallet_id = req.params.wallet_id;
    const oppurtunity_id = req.params.oppurtunity_id;
    const { title, Amount_Investment } = req.body;

    const user = await User.findOne({ wallet_id: wallet_id });
    const oppo = await Oppo.findOne({ oppurtunity_id: oppurtunity_id });

    if (!user) {
      return res.status(404).json({ message: "User not found with the given wallet ID" });
    }

    if (!oppo) {
      return res.status(404).json({ message: "Opportunity not found with the given ID" });
    }

    // Add the new investment to the Investments array of the user
    const data1 = {
      oppurtunity_id: oppurtunity_id,
      title: title,
      Amount_Investment: Amount_Investment,
    };
    console.log(data1);
    user.Investment.push({ ...data1 });

    // Update the total invested amount for the user
    user.Total_Amount_Invested += parseFloat(Amount_Investment);

    // Save the updated user document
    await user.save();

    // Update the total amount collected for the opportunity
    oppo.Total_Amount_Collected = (oppo.Total_Amount_Collected || 0) + parseFloat(Amount_Investment);

    // Add an investor to the Investors array of the opportunity
    const data = {
      wallet_id: wallet_id,
      Amount_Investment: parseFloat(Amount_Investment),
    };
    console.log(data);
    oppo.Investors.push(data);

    // Save the updated opportunity document
    await oppo.save();

    res.status(200).json({ message: "Investment added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

const satrt = async () => {
  try {
    await db();
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

satrt();
