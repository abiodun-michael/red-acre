import {connect, clearDatabase, closeDatabase} from './db'
import app from '../app'
import request from 'supertest'





describe("Test run", ()=>{

    beforeAll(async()=> await connect())

    afterEach(async ()=> await clearDatabase())

    afterAll (async()=>await closeDatabase())

    it("It should create a new exchange",(done)=>{
        request(app)
        .post("/transactions/exchange")
        .send({amountFrom:1, currencyFrom:"BTC", currencyTo:"USD",amountTo:2000})
        .expect(200)
        .end((err,res)=>{
            if(err) return done(err)
            return done()
        })
    })

    

    it("Get all exchanges",(done)=>{
        request(app)
        .get("/transactions")
        .expect(200)
        .end((err,res)=>{
            if(err) return done(err)
            return done()
        })
    })
})