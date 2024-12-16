import React from 'react'
import Input from '../Input'
import Button from '../Button'

const ResetPassword = () => {
    return (
        <>
            <Input placeholder='enter new password' type='password' name='password' />
            <Input extraClass='mb-[29px]' placeholder='enter your code' type='text' name='otp' />
            <Button extraClass='!w-full' title='Verify Email' type='submit' />
        </>
    )
}

export default ResetPassword