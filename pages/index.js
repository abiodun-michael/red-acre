import Toolbar from '../sections/Toolbar'
import {Main} from '../components'
import History from '../sections/History'
import ContextProvider from '../sections/Context'


const Index = ()=>{


    return(
        <ContextProvider>
          <Toolbar />
          <Main>
            <History />
          </Main>
        </ContextProvider>
    )
}

export default Index