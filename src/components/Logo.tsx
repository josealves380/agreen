import '../styles/global.css'
import LogoImg from '../assets/logo.png'

export function Logo() {
  return(
   <div className='flex mb-32 ml-16 mt-16'>
      <img src={LogoImg} alt="logo" />
   </div>
  )
}