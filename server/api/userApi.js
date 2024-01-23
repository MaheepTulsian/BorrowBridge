import express from 'express';
import bodyParser from 'body-parser';
import db from '../Database/connect.js';
import User from '../../server/Database/userschema.js';

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
     res.send('I am live');
});

app.post('/api/add', async (req, res) => {
     try {
       const user = new User(req.body);
       await user.save()
       .then((saveduser) => {
        console.log('User saved:', saveduser);
      })
      .catch((error) => {
        console.error('Error saving user:', error.message);
      });
       res.json(user);
     } catch (error) {
       res.status(500).json({ error: 'Internal Server Error' });
     }
});
   

app.get('/api/getall', async (req, res) => {
     try {
       const user = await User.find();
       res.json(user);
     } catch (error) {
       res.status(500).json({ error: 'Internal Server Error' });
     }
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