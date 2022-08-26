import { Router } from "express";


const router = Router()

router.get('/',(req,res)=>{
    console.log(req)
    res.status(200).send("Hello World!");
})

export default router