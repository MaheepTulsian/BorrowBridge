import mongoose  from 'mongoose';
const uri = 'mongodb+srv://Bridge:TBqXEvwN0NaV9NcG@cluster0.kg9taog.mongodb.net/?retryWrites=true&w=majority';

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

