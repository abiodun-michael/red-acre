import event from "../event";
import mongoose from "mongoose";

/**
 * Database connection factory function
 * @function dbConnection
 * @param {*} options 
 */
const dbConnection = async(options)=>{
    try {
      await mongoose.connect(options.dbUrl);
      console.log("Database connected")
      event.emit("db-connected")
    } catch (error) {
      console.log(error);
    }
}

export default dbConnection