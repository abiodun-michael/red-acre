require('dotenv').config()
import TransactionService from "@services/TransactionService";
import axios from "axios";
import event from '@events'


/**
 * Parse call coinlayer endpint for BTC, ETH and XRP to USD conversion
 * Parse the data and emit it with a send-data event
 * @function liveExchangeHandler
 * 
 */
const liveExchangeHandler = async()=>{
   try{
        const {data} = await axios.get(`http://api.coinlayer.com/api/live?access_key=${process.env.COINLAYER_KEY}`)
  
          if(data.rates){
               const {BTC, ETH, XRP} = data?.rates

               const input = [
                    {currencyFrom:"BTC", amountFrom:1, currencyTo:"USD", amountTo:BTC,extType:"LIVE"},
                    {currencyFrom:"ETH", amountFrom:1, currencyTo:"USD", amountTo:ETH,extType:"LIVE"},
                    {currencyFrom:"XRP", amountFrom:1, currencyTo:"USD", amountTo:XRP,extType:"LIVE"}
                ]
                const tr = await TransactionService.exchange(input)
                console.log(tr)
                event.emit("send-data",tr)
          }
 
   }catch(error){
        console.log(error)
   }
}

export default liveExchangeHandler