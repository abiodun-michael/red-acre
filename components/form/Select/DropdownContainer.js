import { memo } from "react"


const DropdownContainer = ({open, children})=>{

    return(
        <>
             <ul className={`option-holder ${open ? 'active':''}`}>
                {children}
            </ul>

            <style jsx>{`
            
                .option-holder{
                    list-style:none;
                    padding:0;
                    height:${open ? 'auto':0};
                    box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.08);
                    border-radius: 8px;
                    background:white;
                    transform: translateY(0);
                    transition:all 300ms;
                    position:absolute;
                    overflow:hidden;
                    width:100%;
                    z-index:200;
                }

             

                .active{
                    transform:translateY(10px)
                }
            `}</style>
        </>
    )
}

export default memo(DropdownContainer)