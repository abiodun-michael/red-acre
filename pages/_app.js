import "../public/css/global.css"
import "react-datepicker/dist/react-datepicker.css";
import  { BreakpointProvider } from 'react-socks';

const App = ({Component, pageProps})=>{

    return(
        <BreakpointProvider><Component {...pageProps}/></BreakpointProvider>
    )
}

export default App