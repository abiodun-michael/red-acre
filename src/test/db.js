import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

let mongodb


export const connect = async()=>{
    mongodb = await MongoMemoryServer.create()
    const uri = mongodb.getUri()

    const mongooseOpts = {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }

    mongoose.connect(uri,mongooseOpts)
}

export const closeDatabase = async()=>{
    await mongoose.connection.dropDatabase()
    await mongoose.connection.close()
    await mongodb.stop()
}


export const clearDatabase = async()=>{
    const collections = mongoose.connection.collections
    for(const key in collections){
        const collection = collections[key]
        collection.deleteMany()
    }
}