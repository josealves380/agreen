import './styles/global.css'
import {Logo} from './components/Logo';
import {Image} from './components/Image'
import { Button } from './components/Button';
import { Input } from './components/Input';


function App() {

  return (
     <div className='flex flex-col mt-8 ml-8'>    
        <Logo/>
        <Input />
        <Input />
        <Button />         
        <Image/>      
    </div>
  )
}

export default App
