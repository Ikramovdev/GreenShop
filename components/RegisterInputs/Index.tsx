import React, { SetStateAction } from 'react'
import Button from '../Button'
import Input from '../Input'

interface RegisterType{
  setIsLogin:React.Dispatch<SetStateAction<"login" | "register" | "verify_register" | "forgotPassword" | "reset_password">>
}

const RegisterInputs:React.FC<RegisterType> = ({setIsLogin}) => {
  return (
    <>
        <p className='font-regular text-[13px] text-[#3D3D3D] leading-[16px]'>Enter your username and password to login.</p>
        <Input placeholder='Username' type='text' name='username'/>
        <Input placeholder='Enter your email address' type='email' name='email'/>
        <Input placeholder='Password' type='password' name='password'/>
        <Input placeholder='Confirm Password' type='password' name='confirm_password'/>
        <p onClick={() => setIsLogin("forgotPassword")} className='text-[14px] text-[#46A358] leading-[16px] font-regular cursor-pointer text-end mt-[14px] mb-[27px]'>Forgot Password?</p>
        <Button extraClass='w-full mt-[0px]' title='login' type='submit'/>
    </>
  )
}

export default RegisterInputs