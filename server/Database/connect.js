import mongoose  from 'mongoose';
import {al} from '../../ale.js'
const userName= al[0].DB_USERNAME;
const password= al[0].DB_PASSWORD;

const uri = `mongodb+srv://${userName}:${password}@cluster0.kg9taog.mongodb.net/?retryWrites=true&w=majority`;

const db = async () => {
     try {
       await mongoose.connect(uri, {
         useNewUrlParser: true,
         useUnifiedTopology: true, // Add this option if you're using a version of the MongoDB Node.js driver that requires it.
       });
       console.log('Database is connected');
     } catch (error) {
       console.error('Error connecting to the database:', error.message);
     }
};

export default db;

