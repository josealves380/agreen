import '../styles/global.css'
import Imagem from '../assets/image.png'

export function Image() {
  return(
   <div>
      <img  className="flex flex-row justify-end align-top ml-96 mt-0" src={Imagem} alt="logo" />
   </div>
  )
}