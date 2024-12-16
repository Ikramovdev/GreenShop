import { CactusImg, CallIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, SiteLogo, TwitterIcon, YouTubeIcon } from '@/public/icon/Icon'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='mb-[13px]'>
      <div className='w-[1200px] mx-auto'>
        <div className='bg-[#FBFBFB]'>
          <ul className='p-[35px] flex items-center gap-[25px]'>
            <li className='w-[204px]'>
              <div className='bg-[#46A35821] w-[74px] h-[74px] rounded-full relative'>
                <Image className='absolute right-[-5px] top-[-19px]' src={'/images/leafItem1.svg'} alt='item1Img' width={61} height={46} />
                <Image className='absolute right-0 bottom-0' src={'/images/ClothItem1.svg'} alt='item1Img' width={55} height={48} />
              </div>
              <h3 className='font-bold text-[17px] leading-[17px] text-[#3D3D3D] mt-[17px] mb-[9px]'>Garden Care</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </li>
            <li className='bg-[#46A3581A] w-[1px] h-[187px] mx-[12px]'></li>
            <li className='w-[204px] mx-[25px]'>
              <div className='bg-[#46A35821] w-[74px] h-[74px] rounded-full relative'>
                <CactusImg />
              </div>
              <h3 className='font-bold text-[17px] leading-[17px] text-[#3D3D3D] mt-[17px] mb-[9px]'>Plant Renovation</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </li>
            <li className='bg-[#46A3581A] w-[1px] h-[187px] mx-[12px]'></li>
            <li className='w-[204px]'>
              <div className='bg-[#46A35821] w-[74px] h-[74px] rounded-full relative'>
                <Image className='absolute right-0 top-[-10px]' src={'/images/leafItem3.svg'} alt='leafimg' priority width={44} height={49} />
                <Image className='absolute right-[-10px] bottom-[3px]' src={'/images/clothItem3.svg'} alt='leafimg' priority width={83} height={40} />
              </div>
              <h3 className='font-bold text-[17px] leading-[17px] text-[#3D3D3D] mt-[17px] mb-[9px]'>Plant Renovation</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </li>
            <li className='w-[354px] flex flex-col gap-[17px]'>
              <h2>Would you like to join newsletters?</h2>
              <label className='flex w-[354px]'>
                <input className='w-[75%] p-[12px] bg-white rounded-[6px] outline-none focus:border-[2px] focus:border-green-500 border-[2px] border-gray-200' type='email' placeholder='enter your email address...' />
                <button className='w-[25%] font-medium text-[16px] text-white leading-[20px] rounded-[6px] py-[7px] px-[17px] bg-[#46A358] flex items-center justify-center gap-[4px] cursor-pointer' type='submit'>Join</button>
              </label>
              <p className='font-reuglar text-[13px] leading-[22px] text-[#727272]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
            </li>
          </ul>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className='w-[1200px] mx-auto bg-[#46A3581A] py-[27px] px-[23px] border-t-[1px] border-b-[1px] border-[#46A358]'>
        <ul className='flex items-center gap-[60px] '>
          <li><SiteLogo /></li>
          <li className='flex items-center space-x-[10px] pl-[27px]'>
            <LocationIcon />
            <p className='w-[176px] font-regular text-[14px] leading-[22px] text-[#3D3D3D]'>70 West Buckingham Ave.Farmingdale, NY 11735</p>
          </li>
          <li>
            <Link className='w-[200px] flex items-center gap-[10px]' href={'mailto:contact@greenshop.com'}>
              <EmailIcon />
              <p className='font-regular text-[14px] leading-[22px] text-[#3D3D3D]'>contact@greenshop.com</p>
            </Link>
          </li>
          <li className='pl-[13px]'>
            <Link className='w-[200px] flex items-center gap-[10px]' href={'tel:+8801911717490'}>
              <CallIcon />
              <p className='font-regular text-[14px] leading-[22px] text-[#3D3D3D]'>+88 01911 717 490</p>
            </Link>
          </li>
        </ul>
      </div>
      <div className='w-[1200px] mx-auto py-[33px] px-[23px] flex items-center border-b-[1px] border-[#46A35833] mb-[7px]'>
        <div className='mr-[166px]'>
          <strong className='font-bold text-[18px] leading-[16px] mb-[8px]'>My Account</strong>
          <ul>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>My Account</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Our stores</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Contact us</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Career</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Specials</p>
            </li>
          </ul>
        </div>
        <div className='mr-[150px]'>
          <strong className='font-bold text-[18px] leading-[16px] mb-[8px]'>Help & Guide</strong>
          <ul>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Help Center</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>How to Buy</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Shipping & Delivery</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Product Policy</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>How to Return</p>
            </li>
          </ul>
        </div>
        <div className='mr-[173px]'>
          <strong className='font-bold text-[18px] leading-[16px] mb-[8px]'>Categories</strong>
          <ul>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>House Plants</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Potter Plants</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Seeds</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Small Plants</p>
            </li>
            <li>
              <p className='font-regular text-[14px] leading-[30px] text-[#3D3D3D]'>Accessories</p>
            </li>
          </ul>
        </div>
        <div >
          <strong className='font-bold text-[18px] leading-[16px]'>Social Media</strong>
          <ul className='flex items-center gap-[20px] mt-[20px] mb-[33px]'>
            <li>
              <div className='w-[30px] h-[30px] rounded-[4px] border-[1px] border-[#46A358] flex items-center justify-center text-[#46A358] hover:border-transparent hover:bg-[#46A358] hover:text-white duration-300'><FacebookIcon/></div>
            </li>
            <li>
              <div className='w-[30px] h-[30px] rounded-[4px] border-[1px] border-[#46A358] flex items-center justify-center text-[#46A358] hover:border-transparent hover:bg-[#46A358] hover:text-white duration-300'><InstagramIcon/></div>
            </li>
            <li>
              <div className='w-[30px] h-[30px] rounded-[4px] border-[1px] border-[#46A358] flex items-center justify-center text-[#46A358] hover:border-transparent hover:bg-[#46A358] hover:text-white duration-300'><TwitterIcon/></div>
            </li>
            <li>
              <div className='w-[30px] h-[30px] rounded-[4px] border-[1px] border-[#46A358] flex items-center justify-center text-[#46A358] hover:border-transparent hover:bg-[#46A358] hover:text-white duration-300'><YouTubeIcon/></div>
            </li>
          </ul>
          <p className='font-bold text-[18px] leading-[16px] mb-[13px]'>We accept</p>
          <Image src={'/images/SocialImages.svg'}  alt='socialimages' width={224} height={26}/>
        </div>
      </div>
      <p className='text-center font-regular text-[14px] laeding-[30px] text-[#3D3D3D]'>© 2021 GreenShop. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer