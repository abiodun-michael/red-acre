import { Router } from "express";
import transactionService from "@services/TransactionService";
import {validateExchange} from '@validator'
import event from '@events'

const router = Router()

router.get('/',async(req,res)=>{
    const {page:selectedPage, limit:selectedLimit, fromDate, toDate, type} = req.query || {}

    const transaction =  await transactionService.getAllTransactionHistory({pageQuery:selectedPage,limitQuery:selectedLimit,fromDate,toDate, type})
    const {docs, totalDocs, limit, totalPages, page, pagingCounter, hasNextPage, hasPrevPage, prevPage, nextPage} = transaction
    
   
    res.status(200).json({
        result:docs,
        query:{
            totalDocs, 
            limit, 
            totalPages, 
            page, 
            pagingCounter, 
            hasNextPage, 
            hasPrevPage, 
            prevPage, 
            nextPage
        }
    })
})

/** Listen to post method on the path /transactions/exchange
 * @method router.post
 */
router.post('/exchange',async(req,res)=>{
    try{

        /**
         * Validate the request body using JOI
         */
        const {value, error} = validateExchange(req.body)
        if(error){

            /**
             * Return error if the value is not according to format
             */
            res.status(400).json(error)
        }

        /**
         * If validation is correct, save into db
         */
        const result = await transactionService.exchange({...value, extType:"EXCHANGE"})

        /**
         * Emit a send-data event so that the websocket can
         * send the data to the clients
         */
        event.emit("send-data",result)
        res.status(200).json(result)
    }catch(error){
        console.log(error)
    }
})

export default router