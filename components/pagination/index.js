import { memo, useContext } from 'react'
import {Next,Previous} from '../icons'
import Item from './Item'
import {ExchangeContext} from '../../sections/Context'
import { useLazyQuery } from '../../hooks'


const Pagination = ()=>{
  

    const {handleResult, data:{query}} = useContext(ExchangeContext)
    const {totalPages,page,hasNextPage, hasPrevPage} = query

    const [getTransactions] = useLazyQuery("/transactions",{
        onCompleted(data){
            handleResult(data)
        }
    })


    return(
        <>
            <ul className="pagination">
                {hasPrevPage ? <Item onClick={()=>getTransactions({limit:10,page: (page - 1)})}><Previous /></Item>:null}
                {
                    Array.from({length: totalPages}, (_, i) => i + 1)?.map((item,i)=>(
                        <Item label={item} active={item === page} key={i} 
                            onClick={()=>getTransactions({limit:10,page:item})}>{item}</Item>
                    ))
                }
                {hasNextPage ? <Item  onClick={()=>getTransactions({limit:10,page: (page + 1)})}><Next /></Item>:null}
            </ul>

            <style jsx>{`
                .pagination{
                    margin-top:29px;
                    display:flex;
                    padding:0;
                    list-style:none;
                    gap:13px;
                    align-items:center;
                }
            
            `}</style>
        </>
    )
}

export default memo(Pagination)

