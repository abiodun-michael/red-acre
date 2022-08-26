require("dotenv").config()
import app from './app'
import dbConnection from "@database";
import event from '@events'
import * as http from 'http';
import * as WebSocket from 'ws';


/**
 * Create a store for all connected client
 */
const clients = new Set()

/**
 * Use available port in the system environment
 */
const PORT = process.env.PORT || 4000

/**
 * create instance of express app
 * Attach it to an http server and pass it to instance of websocket server
 */

const server = http.createServer(app)
const wss = new WebSocket.Server({ server });



/**
 * Listen to client connection to socket and store
 * the client in the store created above
 */
wss.on('connection', (ws) => {
   clients.add(ws)
});


/**
 * Listen to send-data event from service
 * when a new exchange has been submitted either from
 * live or exchange and then run a loop over all the clients stored
 * in the store above and send it to them
 */
event.on("send-data",(data)=>{
    for(let client of clients){
        client.send(JSON.stringify(data))
    }
})

/**
 * invoke database connection factory function
 */
dbConnection({dbUrl:process.env.MONGO_URL})

/**
 * Listen the database connection and then
 * start the server
 */
event.on("db-connected",()=>{
    server.listen(PORT,()=>{
        console.log(`Server running on http://localhost:${PORT}`)
    })
})
