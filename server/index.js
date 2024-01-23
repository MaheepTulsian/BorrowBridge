import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());




const satrt = async () => {
     try{
          await db();
          app.listen(port, () => {
               console.log(`Server is running on port ${port}`);
          });
     }
     catch(error){
          console.log(error);
     }
};

satrt();
