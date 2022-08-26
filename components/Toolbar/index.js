


const Index = ({children})=>{


    return(
        <>
            <header className="toolbar-container">
                <div className="wrapper">
                    {children}
                </div>
            </header>

            <style jsx>{`
                .toolbar-container{
                    height:14.625rem;
                    box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
                    background-color:var(--white);
                }

                .toolbar-container .wrapper{
                    width:80%;
                    margin:0 auto;
                    height:100%;
                    padding-top:60px;
                }

                @media screen and (max-width:375px){
                    .toolbar-container{
                        height: auto;
                        padding-bottom:40px
                    }
                }
            
            `}</style>
        </>
    )
}

export default Index