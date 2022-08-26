


const Main = ({children})=>{


    return(
        <>
            <main>
                <div className="section-main">
                    <h3>History</h3>
                    {children}
                </div>
            </main>

            <style jsx>{`
                .section-main{
                    width:80%;
                    margin:0 auto;
                    padding-top:52px;
                }
            
            `}</style>
        </>
    )
}

export default Main