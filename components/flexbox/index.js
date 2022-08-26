


export const Row = ({children,gutter = 10,align,justify, direction = "row", ...rest})=>{

        return(
            <>
                <div className="row" {...rest}>
                    {children}
                </div>
                <style jsx>{`
                    .row{
                        display:flex;
                        gap:${gutter}px;
                        flex-direction:${direction};
                        align-items:${align};
                        justify-content:${justify};
                    }

                    @media screen and (max-width:375px){
                        .row{
                            display:block;
                        }
                    }
                
                `}</style>
            </>
        )
}

export const Column = ({children, ...rest})=>{

    return(
        <>
            <div className="column" {...rest}>
                 {children}
            </div>

            <style jsx>{`
                @media screen and (max-width=375px){
                    .column{
                        width:100%;
                    }
                }
            
            `}</style>
        </>
    )
}