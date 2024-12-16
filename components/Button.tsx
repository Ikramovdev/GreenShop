"use client"
import React, { ReactNode } from 'react'



interface ButtonType {
  leftIcon?: ReactNode
  title: string
  rightIcon?: ReactNode
  extraClass?: string
  onclick?: () => void
  type: "submit" | "reset" | "button"
}


const Button: React.FC<ButtonType> = ({ leftIcon, title, rightIcon, extraClass, onclick, type }) => {
  return (
    <button type={type} onClick={onclick} className={`${extraClass} font-medium text-[16px] text-white leading-[20px] rounded-[6px] py-[7px] px-[17px] bg-[#46A358] flex items-center justify-center gap-[4px] cursor-pointer`}>
      {leftIcon && leftIcon}
      <span>{title}</span>
      {rightIcon && rightIcon}
    </button>
  )
}

export default Button