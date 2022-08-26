import { memo } from "react"


const Item = ({children, active, onClick=()=>{}})=>{

    return(
        <>
            <li className={`pagination-item ${active ? 'active':''}`} onClick={()=>onClick(children)}>{children}</li>

            <style jsx>{`
                .pagination-item{
                    height:40px;
                    min-width:40px;
                    border-radius:8px;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    cursor:pointer;
                }

                .active{
                    background-color:#000000;
                    color:#ffffff;
                }

                .pagination-item:hover{
                    background-color:#E8F1F1;
                }
            
            `}</style>
        </>
    )
}

export default memo(Item)