import { CloseModal } from '@/public/icon/Icon'
import React, { ReactNode, SetStateAction } from 'react'

interface ModalType {
    isOpen: boolean
    setIsOpen: React.Dispatch<SetStateAction<boolean>>
    width: number
    children:ReactNode
}
const Modal: React.FC<ModalType> = ({ isOpen, setIsOpen, width ,children}) => {
    return (
        <div onClick={(e) => (e.target as HTMLDivElement).id == "wrapper" ? setIsOpen(false) : ""} id='wrapper' className={`fixed inset-0 backdrop-blur bg-[#00000029] flex items-center justify-center ${!isOpen && "scale-0"}`}>
            <div style={{ width: `${width}px` }} className='absolute py-[50px] px-[100px] bg-white rounded-md'>
                {children}
                <button onClick={() => setIsOpen(false)} className='absolute top-[13px] right-[12px]'>
                    <CloseModal />
                </button>
            </div>
        </div>
    )
}

export default Modal