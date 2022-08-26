import { useRef, useState } from "react";
import { Toolbar, Row, Column, Input, Button, Select} from "../components";
import {Bitcoin,Ethereum,Ripple,Litcoin, Euro, USD, GBP, CAD} from '../components/icons'
import {useMutation} from '../hooks'
import {Formik, Form, useFormikContext} from 'formik'


const Index = ()=>{

 
    const [exchange,{loading}] = useMutation("/transactions/exchange")
    

    return(
        <>
            <Toolbar>
                <h1 style={{marginBottom:27}}>Exchange</h1>
                <Formik
                    onSubmit={(input,{resetForm})=>exchange({data:input}).then((result)=>{
                        if(result){
                            resetForm()
                        }
                    })}
                    initialValues={{currencyFrom:"BTC", amountFrom:1, currencyTo:"USD", amountTo:0}}>
                        {({values,errors,handleSubmit, setFieldValue,handleChange})=>(
                    <Form>
                    <Row gutter={13} align="center">
                    <Column>
                   
                        <Select label="Currency From" 
                            onChange={(e)=>setFieldValue("currencyFrom",e)} value={values.currencyFrom}
                            data={[{label:"BTC - Bitcoin", value:"BTC", icon:Bitcoin},
                            {label:"ETH - Ethereum", value:"ETH", icon:Ethereum},
                            {label:"XRP - Ripple", value:"XRP", icon:Ripple},
                            {label:"LTC - Litcoin", value:"LTC", icon:Litcoin}
                        ]}
                            />
                    </Column>
                    <Column>
                        <Input label="Amount" name="amountFrom" onChange={handleChange} value={values.amountFrom}/>
                    </Column>
                    <Column>
                        <p style={{marginRight:16,marginLeft:16, marginTop:25}} className="mobile-hide">=</p>
                    </Column>
                    <Column>
                    <Select label="Exchange to"onChange={(e)=>setFieldValue("currencyTo",e)} value={values.currencyTo}
                            data={[{label:"EUR - Euro", value:"EUR", icon:Euro},
                            {label:"USD - American Dollar", value:"USD", icon:USD},
                            {label:"GBP - Pound Sterling", value:"GBP", icon:GBP},
                            {label:"CAD - Canadian Dollar", value:"CAD", icon:CAD}
                        ]}
                            />
                    </Column>
                   
                    <Column>
                        <Input label="Amount" name="amountTo"  onChange={handleChange} value={values.amountTo}/>
                    </Column>
                    <Column>
                        <Button appearance="primary" onClick={handleSubmit} loading={loading} style={{marginTop:25}}>Save</Button>
                    </Column>
                </Row>
                </Form>
                )}</Formik>
            </Toolbar>
        </>
    )
}
export default Index