import React, { SetStateAction } from 'react'
import Input from "@/components/Input"
import Button from '../Button'

interface LoginType{
  setIsLogin:React.Dispatch<SetStateAction<"login" | "register" | "verify_register" | "forgotPassword" | "reset_password">>
}

const LoginInputs:React.FC<LoginType> = ({setIsLogin}) => {
  return (
    <>
        <p className='font-regular text-[13px] text-[#3D3D3D] leading-[16px]'>Enter your username and password to login.</p>
        <Input placeholder='almamun_uxui@outlook.com' type='email' name='email'/>
        <Input placeholder='***********' type='password' name='password'/>
        <p onClick={() => setIsLogin("forgotPassword")} className='text-[14px] text-[#46A358] leading-[16px] font-regular cursor-pointer text-end mt-[14px] mb-[27px]'>Forgot Password?</p>
        <Button extraClass='!w-full mt-[0px]' title='login' type='submit'/>
    </>
  )
}

export default LoginInputs