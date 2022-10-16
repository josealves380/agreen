import '../styles/global.css'
import LogoImg from '../assets/logo.png'

export function Logo() {
  return(
   <div className='justify center align center'>
      <img src={LogoImg} alt="logo" />
   </div>
  )
}