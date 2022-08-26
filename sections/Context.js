import { createContext, useState } from "react";

export const ExchangeContext = createContext(null)


const ContextProvider = ({children})=>{

    const [state, setState] = useState({
        result:[],
        query:{
            page:1,
            limit:10
        }
    })

    const handleResult = (data)=>{
        setState(data)
    }

    return(
        <ExchangeContext.Provider value={{data:state, handleResult}}>{children}</ExchangeContext.Provider>
    )
}

export default ContextProvider