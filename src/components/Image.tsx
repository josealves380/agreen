import '../styles/global.css'
import Imagem from '../assets/image.png'

export function Image() {
  return(
   <div>
      <img width={430} className="flex justify-end align-top float-right ml-96 mt-0 " src={Imagem} alt="logo" />
   </div>
  )
}