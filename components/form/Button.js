import { Oval } from "react-loader-spinner"



const Button = ({children,loading,appearance,...rest})=>{

    return(
        <>
            <button disabled={loading} className={appearance} {...rest}>{loading ? <Oval color="#ffffff" width={20} height={20}/>:children}</button>

            <style jsx>{`
                button{
                    height:40px;
                    padding: 12px 24px;
                    color:var(--white);
                    border-radius:8px;
                    outline:none;
                    border:none;
                    display:flex;
                    align-items:center;
                }

                button:not(:disabled){
                    cursor:pointer;
                }

                .primary{
                    background-color:var(--primary-color);
                    color:
                }

                .ghost{
                    background-color:transparent;
                    border:1px solid var(--secondary-color);
                    color:var(--secondary-color)
                }
                @media screen and (max-width:375px){
                    button{
                        width:100%;
                    }
                }
            
            `}</style>
        </>
    )
}

export default Button