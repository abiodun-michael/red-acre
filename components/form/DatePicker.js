import Input from "./Input"
import ReactDatePicker,{CalendarContainer} from "react-datepicker"
import { Date } from "../icons";

const MyContainer = ({ className, children }) => {
    return (
        <>
      <div className="picker-wrapper">
        <CalendarContainer className={className}>
          <div style={{ position: "relative"}}>{children}</div>
        </CalendarContainer>
      </div>

      <style jsx>{`
        .picker-wrapper{
            box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
            border-radius: 8px;
        }
      
      `}</style>

      </>
    );
  };


const CustomInput = ({...rest})=>{

  return(
    <>
      <div className="date-wrapper">
        <Input {...rest}/>
        <div className="date-icon"><Date /></div>
      </div>

      <style jsx>{`
        .date-wrapper{
          position:relative;
        }

        .date-icon{
          position:absolute;
          top:35px;
          right:10px;
        }
      
      `}</style>
    </>
  )
}

const CustomDatePicker = ({...rest})=>{
    const {onChange, label, value} = {...rest} || {}

    return(
        <>
            <ReactDatePicker selected={value} onChange={onChange}
                customInput={<CustomInput label={label}/>}
                calendarContainer={MyContainer}
             
                />
        </>
    )
}

export default CustomDatePicker