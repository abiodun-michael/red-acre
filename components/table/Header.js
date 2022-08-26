import { useContext } from "react"
import { TableContext } from "./TableContext"
import Column from "./Column"
import {useCurrentBreakpointName} from 'react-socks'
import { Sort } from "../icons"

const TableHeader = ()=>{
    const breakpoint = useCurrentBreakpointName()
    const {columns} = useContext(TableContext)


    return(
        <>
          {
            breakpoint !== 'small' && breakpoint !== 'xsmall' ?   <div className="table-header">
               
            {
                columns?.map((item,i)=>(
                    <Column {...item} key={i}/>
                ))
            }

        </div>:null
          }
            <style jsx>{`
                .table-header{
                    height:30px;
                    background: #EEEEEE;
                    border-radius: 4px;
                    display:flex;
                    align-items:center;
                }

                @media screen and (max-width:375px){
                    .table-header{
                        display:none;
                    }
                }
            
            `}</style>
        </>
    )
}

export default TableHeader
