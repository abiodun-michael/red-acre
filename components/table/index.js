import TableHeader from "./Header";
import TableBody from "./TableBody";
import { TableContext } from "./TableContext";

const Table = ({columns, data, rowStyle,loading})=>{

    return(
        <TableContext.Provider value={{loading,columns,data,rowStyle}}>
            <TableHeader />
            <TableBody />
        </TableContext.Provider>
    )
}

export default Table