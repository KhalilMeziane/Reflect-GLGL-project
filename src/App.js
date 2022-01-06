import { BrowserRouter} from 'react-router-dom'
import RouterConfig  from './routes/_RouterConfig'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <RouterConfig/>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;