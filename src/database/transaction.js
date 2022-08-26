import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

const {Schema} = mongoose

/**
 * Transaction Schema
 */
const TransactionSchema = new Schema({
    amountFrom: {
        type:Number,
        required:true
    },
    currencyFrom:{
        type:String,
        required:true
    },
    amountTo:{
        type:Number,
        required:true
    },
    currencyTo:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date, 
        default: Date.now,
        required:true
    },
    extType:{
        type:String,
        enum:["LIVE","EXCHANGE"],
        default:"LIVE",
        required:true
    }
})

TransactionSchema.plugin(mongoosePaginate)

const TransactionModel = mongoose.model("Transaction", TransactionSchema)

export default TransactionModel