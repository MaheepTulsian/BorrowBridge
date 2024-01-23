import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import db from "../Database/connect.js";

import Oppo from "../../server/Database/oppurtunity.js";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("I am live");
});

app.post("/api/opps", async (req, res) => {
  try {
    const oppo = await Oppo.create(req.body);
    res.status(200).json(oppo);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/opps/:oppid" , async(req, res)=>{
  try{
    const oppo = await Oppo.find({oppurtunity_id: req.params.oppid});

    if (oppo.length === 0) {
      return res.status(404).json({ message: "Cannot find user with the given oppurinity ID" });
    }

    res.status(200).json(oppo);
    
  }catch(error){
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
}
);


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
