"use client"
import { HideEyeIcon, ShowEyeIcon } from '@/public/icon/Icon'
import React, { useState } from 'react'

interface InputType {
    placeholder: string
    name: string
    extraClass?: string
    type: "text" | "password" | "email" | "number"
}
const Input: React.FC<InputType> = ({ type, name, placeholder, extraClass }) => {
    const [showPass, setShowPass] = useState<boolean>(false)
    return (
        <label className='relative'>
            <input className={`${extraClass} w-full pl-[14px] pr-[5px] py-3 outline-none border-[1px] border-[#EAEAEA] focus:border-[1px] focus:border-[#46A358] rounded-[5px] mt-[17px]`} type={type == "password" ? (showPass ? "text":"password") :type} name={name} placeholder={placeholder} required/>
            {type == "password"
                &&
                <div onClick={() => setShowPass(!showPass)} className='flex items-center justify-between absolute top-0 right-[10px]'>
                    <button className={`${showPass ? "" : "hidden"}`}><HideEyeIcon /></button>
                    <button className={`${showPass ? "hidden" : ""}`}><ShowEyeIcon /></button>
                </div>
            }
        </label>
    )
}

export default Input