import { Row, Column, Select,DatePicker, Button } from "../components"
import { Formik, Form } from "formik"
import { useLazyQuery } from "../hooks"
import { ExchangeContext } from "./Context"
import { useContext } from "react"

const Filter = ()=>{

    const {handleResult} = useContext(ExchangeContext)

    const [getFilter,{loading}] = useLazyQuery("/transactions",{
        onCompleted(data){
            handleResult(data)
        }
    })

    return(
        <>
        <section className="filter">
           <Formik onSubmit={(e)=>getFilter(e)}
            initialValues={{fromDate:new Date(), toDate: new Date(),type:"ALL"}}>
                {({values, setFieldValue, handleSubmit})=>(
                    <Form>
                        <Row>
                            <Column>
                                <DatePicker label="From date" value={values.fromDate}
                                    onChange={(e)=>setFieldValue("fromDate",e)}/>
                            </Column>
                            <Column>
                                <DatePicker label="To date"  value={values.toDate}
                                    onChange={(e)=>setFieldValue("toDate",e)}/>
                            </Column>
                            <Column>
                                <Select label="Type" 
                                    value={values.type}
                                    onChange={(e)=>setFieldValue("type",e)}
                                    data={[{label:"All",value:"ALL"},{label:"Live Price",value:"LIVE"},{label:"Exchange",value:"EXCHANGE"}]}/>
                            </Column>
                            <Column>
                                <Button loading={loading} onClick={handleSubmit} appearance="ghost" style={{marginTop:25}}>Filter</Button>
                            </Column>
                        </Row>
                    </Form>
           )}</Formik>
        </section>
            <style jsx>{`
                .filter{
                    margin-top:20px;
                    margin-bottom:45px;
                }
            `}</style>
        </> 
    )
}

export default Filter