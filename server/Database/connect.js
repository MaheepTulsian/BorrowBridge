import mongoose  from 'mongoose';
import  MONGO_CONNECTION  from 'dotenv';

const uri = process.env.MONGO_CONNECTION;

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

