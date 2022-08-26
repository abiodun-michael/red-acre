import {memo} from 'react'


const TableData = ({data,...rest})=>{
    const {style} = {...rest}

    return(
        <>
            <div className="table-data" style={style}>
                {data}
            </div>

            <style jsx>{`
               .table-data{
                width:100%
               }
            `}</style>
        </>
    )
}

export default memo(TableData)