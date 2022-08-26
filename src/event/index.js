require("dotenv").config()
import {EventEmitter} from 'events'
import liveExchangeHandler from '@utils/config'

/**
 * Create instance of event emitter
 */
const eventEmitter = new EventEmitter()

export default eventEmitter


/**
 * Listen to database connection
 */
eventEmitter.on("db-connected",()=>{
    /**
     * run liveExchangeHandler at an interval specified in the 
     * env file
     */
    setInterval(()=>{
        liveExchangeHandler()
    },process.env.TIMER_INTERVAL)
})