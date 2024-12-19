"use client"
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const layout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const path = usePathname()
    console.log(path);
    return (
        <div>
            <div>Home / Shop {path.includes("shopping-cart") && "/shopping-cart"}</div>
            {children}
        </div>
    )
}

export default layout