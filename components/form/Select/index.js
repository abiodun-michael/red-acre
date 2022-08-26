import { useEffect, useState, useCallback, memo } from "react"
import Input from "../Input"
import {Caret} from '../../icons'
import DropdownContainer from './DropdownContainer'
import Option from "./Option"



const Select = ({data,value,onChange=()=>{},...rest})=>{

    const [open, setOpen] = useState(false)
    const [state, setState] = useState({
        label:"",
        index:-1
    })


    const handleChange = useCallback((e)=>{
        const index = data?.findIndex(el=>el.value === e)
        if(index > -1){
            onChange(e)
            setState({label:data[index].label, index})
        }
    },[state])



    const Icon = data[state.index]?.icon


        useEffect(()=>{
            handleChange(value)
        },[])

    return(
        <>
           <div className="select-wrapper">
           
            <Input style={{paddingLeft:Icon ? 45:16}} value={state.label} {...rest} onClick={()=>setOpen(!open)} onBlur={()=>setOpen(false)} readOnly/>
            <span className="caret"><Caret /></span>
                {
                    state.index > -1 && Icon ? <span className="icon"><Icon /></span>:null
                }
                <DropdownContainer open={open}>
                    {
                        data?.map((item,i)=>(
                            <Option {...item} key={i} selectedValue={value} onClick={handleChange}/>
                        ))
                    }
                </DropdownContainer>
           </div>

            <style jsx>{`
                    .select-wrapper{
                        position:relative;
                        width:100%
                    }

                    .caret{
                        position:absolute;
                        right:17px;
                        top:35px;
                    }

                    .icon{
                        position:absolute;
                        top:32px;
                        left:15px;
                    }
            
            `}</style>
        </>
    )
}

export default memo(Select)