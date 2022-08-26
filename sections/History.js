import { Table } from "../components"
import Filter from "./Filter"
import Pagination from "../components/pagination"
import { useQuery } from "../hooks"
import { useContext } from "react"
import { client } from "../config"
import { ExchangeContext } from "./Context"
import moment from "moment"


const column = [
    {
        title:"Date & Time",
        render:({createdAt})=>moment(createdAt).format('DD-MM-YYYY hh:mm'),
        style:{
            paddingLeft:20
        },
        hideOnMobile:true
    },
    {
        title:"Currency From",
        dataIndex:"currencyFrom"
    },
    {
        title:"Amount 1",
        dataIndex:"amountFrom"
    },
    {
        title:"Currency To",
        dataIndex:"currencyTo"
    },
    {
        title:"Amount 2",
        dataIndex:"amountTo"
    },
    {
        title:"Type",
        dataIndex:"type",
        hideOnMobile:true,
        style:{
            width:500
        },
        render:({extType})=> extType === "LIVE" ? <span style={{fontWeight:700,color:"var(--primary-color)"}}>Live Price</span>:<span style={{fontWeight:700,color:"var(--secondary-color)"}}>Exchange</span>
    }
]


const History = ()=>{

    const {handleResult,data} = useContext(ExchangeContext)

    const {result,query:{page,limit}} = data

  
    const {loading} = useQuery("/transactions",{
        params:{page,limit},
        onCompleted(data){
            handleResult(data)
        }
    })
 

  client.onopen = ()=>{
    console.log("Client connected")
 }

client.onmessage = ({data:results})=>{
    const parsedResult = JSON.parse(results)
    const responseData = Array.isArray(parsedResult) ? [...result,...parsedResult]:[...result,parsedResult]

    handleResult({...data,result:responseData})
}


    return(
        <>
        <Filter />
        <Table loading={loading}
            columns={column}
            data={result?.reverse()}
            rowStyle={{height:54, fontSize:14}}/>
            <Pagination/>
        </>
    )
}

export default History