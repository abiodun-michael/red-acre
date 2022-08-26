



const Input = ({label,...rest})=>{

    const {name} = {...rest}

    return(
        <>
        <div className="input-wrapper">
            <label className="label" htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest}/>
        </div>
           <style jsx>{`
                .input-wrapper{
                    display:flex;
                    flex-direction:column;
                }

                .input-wrapper input{
                    outline:none;
                    height:42px;
                    border-radius:8px;
                    border:1px solid var(--neutral-color);
                    transition: border 300ms;
                    padding:0 16px;
                    margin-top:2px;
                }

                .input-wrapper input:hover{
                    border-color:#B5D9BB;
                }

                .input-wrapper input:focus{
                    border-color:var(--primary-color);
                }

                .input-wrapper input::placehoder{
                    color: var(--grey-color) !important;
                }

                label{
                    font-size:14px;
                    line-height:1.332rem;
                    color: var(--grey-color)
                }

                @media screen and (max-width:375px){
                    .input-wrapper{
                        margin-top:14px;
                    }
                }
           `}</style>
        </>
    )
}

export default Input