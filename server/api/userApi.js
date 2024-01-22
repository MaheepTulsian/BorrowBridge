import express from 'express';
import bodyParser from 'body-parser';
import db from '../Database/connect.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
     res.send('I am live');
});

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