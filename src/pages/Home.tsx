import { Logo } from "../components/Logo" ;
import {  Button } from "../components/Button" 
import { Input } from "../components/Input";
import { Image } from "../components/Image";



export function Home() {
  return (
    <div className="columns-2 " >
      <Logo />
      <Image />
      <label className="m-12">Informe seu e-email
      <Input  />
      </label>
      <label className="12">Informe sua senha
      <Input />
      </label>
      <Button />
    </div>
  )
}