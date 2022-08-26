import { useContext } from "react"
import { TableContext } from "./TableContext"
import TableData from "./TableData"
import TableRow from './TableRow'
import { MobileRow } from "./TableRow"
import { useCurrentBreakpointName } from "react-socks"
import { Oval } from "react-loader-spinner"


const TableBody = ()=>{

    const breakpoint = useCurrentBreakpointName()


    const {data,columns,loading} = useContext(TableContext)



    return(
        <>
   
            {
               loading ? <div style={{display:"flex",justifyContent:"center",marginTop:10}}><Oval
                height={30}
                width={30}
                color="#E1E8ED"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#9C9C9C"
                strokeWidth={2}
                strokeWidthSecondary={2}
              
              /></div>:
                    data?.map((item,i)=>(
                       breakpoint === 'small' || breakpoint === 'xsmall' ? <MobileRow data={item} key={i}/>: <TableRow data={item} key={i}/>
                    ))
                }
   
        </>
    )
}

export default TableBody

