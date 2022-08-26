import { memo } from "react"


const Column = ({title,...rest})=>{

    const {style} = {...rest}

    return(
        <>
            <div className="table-column" style={{...style}} >{title}</div>

            <style jsx>{`

            .table-column{
                width:100%;
                font-size:14px;
                line-height: 152.2%;
            }

            `}</style>
        </>
    )
}

export default memo(Column)