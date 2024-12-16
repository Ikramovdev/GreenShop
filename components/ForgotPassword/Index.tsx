import React from 'react'
import Input from '../Input'
import Button from '../Button'

const ForgotPassword = () => {
  return (
    <>
      <Input extraClass='mb-[29px]' placeholder='almamun_uxui@outlook.com' type='email' name='email' />
      <Button extraClass='!w-full' title='Verify Email' type='submit'/>
    </>
  )
}

export default ForgotPassword