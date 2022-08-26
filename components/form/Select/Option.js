import { memo } from "react"



const Option = ({icon:Icon=()=><></>,label,value,selectedValue, onClick})=>{

    
return(
    <>
        <li onMouseDown ={()=>onClick(value)} className={ selectedValue === value ? 'selected':''}>
            {Icon ? <Icon />:null}
            <span>{label}</span>
        </li>

        <style jsx>{`
        
            li{
                display:flex;
                gap:8px;
                padding:12px 16px;
                background-color:transparent;
                transition: background 300ms;
                cursor:pointer;
            }

         
            li:first-child{
                border-radius:8px 8px 0 0;
            }
            li:last-child{
                border-radius:0 0 8px 8px;
            }

            li:hover, li.selected{
                background:#EEEEEE;
            }

            li span{
                font-weight:500;
                color:#565656;
                display:inline-block
            }
        `}</style>
    </>
)
}

export default memo(Option)