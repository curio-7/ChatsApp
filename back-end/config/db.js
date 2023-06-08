const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{

        });

        console.log(`mongoDB Connected: ${conn.connection.host}`.cyan.bold);
    }
    catch(error){
        console.log(`Error: ${error.message}`.red.bold);
        process.exit();
    }
};

module.exports = connectDB;