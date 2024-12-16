import React from 'react'
import Input from '../Input'
import Button from '../Button'


interface VerifyRegisterType {
    registerEmail:string
}

const VerifyRegister:React.FC<VerifyRegisterType> = ({registerEmail}) => {
    return (
        <>
            <p className='font-regular text-[12px] text-[#3D3D3D] leading-[16px]'>Enter the 6-digit {registerEmail} !</p>
            <Input extraClass='mb-[29px] placeholder:text-[12px]' placeholder='Enter the 6-digit code sent to your email!' type='text' name='code' />
            <Button extraClass='w-full mt-[0px]' title='login' type='submit'/>
        </>

    )
}

export default VerifyRegister