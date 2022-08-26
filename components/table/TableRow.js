import { useContext } from "react"
import { TableContext } from "./TableContext"
import TableData from "./TableData"

const TableRow = ({data=[]})=>{
 
    const {columns,rowStyle} = useContext(TableContext)

    return(
        <>
            <div className="table-row" style={rowStyle}>
                {
                    columns?.map((item,i)=>(
                        <TableData data={item.render ? item.render(data) : data[item.dataIndex]} {...item} key={i}/>
                    ))
                }
            </div>

            <style jsx>{`
                .table-row{
                        height:30px;
                        border-radius: 4px;
                        display:flex;
                        align-items:center;
                        border:1px solid transparent;
                        transition:all 300ms;
                }

                .table-row:nth-child(odd){
                    background:#EEEEEE
                }

                .table-row:hover{
                    background:#ffffff;
                    border-color:#000000
                }
            `}</style>
        </>
    )
}

export default TableRow


export const MobileRow = ({data})=>{
     

    return(
        <>
            <div className="mobile-row">
                <h3>{data?.currencyFrom} -{">"} {data?.currencyTo}</h3>
                <p>Amount BTC {data?.amount2}</p>
                <span className={`type ${data?.type === "LIVE" ? 'live':'exchanged'}`}></span>
            </div>

            <style jsx>{`
                .mobile-row{
                    border: 1px solid #EFF0F7;
                    border-radius: 12px;
                    background: #F9F9F9;
                    padding:16px;
                    height:85px;
                    margin-top:12px;
                    position:relative;
                }

                .type{
                    position:absolute;
                    top:10px;
                    right:10px;
                    display:inline-block;
                    border-radius:50%;
                    width:16px;
                    height:16px;
                }
                
                .live{
                    background:var(--primary-color)
                }
                .exchanged{
                    background:var(--secondary-color)
                }
            `}</style>
        </>
    )
}