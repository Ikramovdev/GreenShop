"use client"
import { BasketIcon, LogAutIcon, SearchIcon, SiteLogo } from '@/public/icon/Icon'
import Link from 'next/link'
import React, { FormEvent, useContext, useState } from 'react'
import Button from "@/components/Button"
import Modal from "@/components/Modal"
import LoginInputs from './LoginInput/Index'
import { instance } from '@/hook/instance'
import RegisterInputs from './RegisterInputs/Index'
import VerifyRegister from './RegisterInputs/VerifyRegister'
import ForgotPassword from './ForgotPassword/Index'
import ResetPassword from './resetPassword/Index'
import { usePathname, useRouter } from 'next/navigation'
import { Context } from '@/context/AuthContext'

interface navbarType {
    id: string,
    title: string,
    path: string
}
const Header = () => {
    const path = usePathname()
    const router = useRouter()
    const navbarList: navbarType[] = [
        {
            id: "1",
            title: "Home",
            path: "/"
        },
        {
            id: "2",
            title: "Shop",
            path: "/shop"
        },
        {
            id: "3",
            title: "Plant Care",
            path: "/plantCare"
        },
        {
            id: "4",
            title: "Blogs",
            path: "/blogs"
        }
    ]
    const [userName, setUserName] = useState<string>("")
    // modal 
    const [registerEmail, setRegisterEmail] = useState<string>("")
    const [loginModal, setLoginModal] = useState<boolean>(false)
    const { setToken, token } = useContext(Context)
    const [isLogin, setIsLogin] = useState<"login" | "register" | "verify_register" | "forgotPassword" | "reset_password">("login")
    function loginSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (isLogin == "login") {
            const data = {
                password: (e.target as HTMLFormElement).password.value,
                usernameoremail: (e.target as HTMLFormElement).email.value,
            }
            instance().post("/login", data).then((res) => {
                setLoginModal(false)
                setToken(res.data.access_token)
            })
        }
        else if (isLogin == "register") {
            const data = {
                firstName: (e.target as HTMLFormElement).username.value,
                lastName: (e.target as HTMLFormElement).username.value,
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value,
            }
            if ((e.target as HTMLFormElement).password.value == (e.target as HTMLFormElement).confirm_password.value) {
                instance().post("/register", data).then(() => {
                    setRegisterEmail(data.email)
                    setUserName(data.lastName)
                    setIsLogin("verify_register")
                })
            }
            else {
                alert('Write both passwords the same!')
            }
        }
        else if (isLogin == "verify_register") {
            const data = {
                email: registerEmail,
                code: (e.target as HTMLFormElement).code.value,
            }
            instance().post("/users/verify", {},
                { params: data }).then(() => {
                    setIsLogin("login")
                })
        }
        else if (isLogin == "forgotPassword") {
            const email = (e.target as HTMLFormElement).email.value
            instance().post(`/forgot/${email}`, {}).then(res => {
                setRegisterEmail(email)
                setIsLogin("reset_password")
            })
        }
        else if (isLogin == "reset_password") {
            const data = {
                email: (e.target as HTMLFormElement).email.value,
                password: (e.target as HTMLFormElement).password.value,
                otp: (e.target as HTMLFormElement).otp.value,

            }
            instance().put(`/reset_password`, data).then(res => {
                setIsLogin("login")
            })
        }
    }


    // saved liked list 
    // saved liked list 
    return (
        <header>
            <div className='w-[1200px] mx-auto mt-[25px] pb-[20px] flex items-center justify-between border-b-[1px] border-[#46A35880]'>
                <div className='inline-block cursor-pointer'>
                    <SiteLogo />
                </div>
                <div className='flex items-center gap-[261px]'>
                    <ul className='flex items-center space-x-[50px]'>
                        {navbarList.map((item: navbarType) => (
                            <li key={item.id}>
                                <Link className={`${path == item.path ? "border-[#46A358]" : "border-white"} font-bold text-[16px] leading-[20px] text-[#3D3D3D] border-b-[3px] duration-300 pb-[25px]`} href={item.path}>{item.title}</Link>
                            </li>
                        ))}

                    </ul>
                    <div className='flex items-center gap-[30px]'>
                        <div className='cursor-pointer'><SearchIcon /></div>
                        <button onClick={() => router.push("/shop/shopping-cart")} className='w-[30px] relative cursor-pointer'>
                            <div className='relative'><BasketIcon /></div>
                            <strong className='absolute top-[2px] right-[2px] w-[12px] h-[12px] rounded-full bg-[#46A358] px-[4px] font-medium text-[10px] text-white leading-[12px] flex justify-center '>0</strong>
                        </button>
                        <Button onclick={() => setLoginModal(true)} type='button' extraClass={`${token ? "bg-yellow-500" : "bg-[#46A358]"}`} leftIcon={token ? "" : <LogAutIcon />} title={`${token ? userName ? userName: registerEmail : "Login"}`} />
                    </div>
                </div>
            </div>
            <Modal isOpen={loginModal} setIsOpen={setLoginModal} width={500} >
                <ul className='flex items-center justify-center pb-[53px] gap-3'>
                    <li onClick={() => setIsLogin("login")} className={`${isLogin == "login" && "text-[#46A358]"} font-medium text-[20px] text-[#3D3D3D] leading-[16px]`}>Login</li>
                    <li className='w-[1px] h-[16px] bg-[#3D3D3D]'></li>
                    <li onClick={() => setIsLogin("register")} className={`${isLogin == "register" && "text-[#46A358]"} font-medium text-[20px] text-[#3D3D3D] leading-[16px]`}>Register</li>
                </ul>
                <form onSubmit={loginSubmit} className='w-[266px] mx-auto' autoComplete='off'>
                    {isLogin == "login" && <LoginInputs setIsLogin={setIsLogin} />}
                    {isLogin == "register" && <RegisterInputs setIsLogin={setIsLogin} />}
                    {isLogin == "verify_register" && <VerifyRegister registerEmail={registerEmail} />}
                    {isLogin == "forgotPassword" && <ForgotPassword />}
                    {isLogin == "reset_password" && <ResetPassword />}
                </form>
            </Modal>
        </header>
    )
}

export default Header