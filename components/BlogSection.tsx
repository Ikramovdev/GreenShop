"use client"
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { RightArrowIcon } from '@/public/icon/Icon'

const BlogSection = () => {
  return (
    <div className='w-[1200px] mx-auto my-[100px]'>
      <ul className='w-[1200px] flex items-center justify-between my-[138px]'>
        <li className='item w-[45%] h-[250px] bg-[#FBFBFB] flex justify-end pr-[30px] py-[40px] relative'>
          <Image className='absolute left-[-40px] top-[-50px]' src="/images/SummerCactus.png" alt="SummerCactus" width={292} height={292} priority />
          <div className='text-right flex flex-col gap-[20px] w-[290px] relative'>
            <h3 className='w-[150px] absolute right-0 top-0 font-black text-[18px] leading-[24px]'>Summer cactus & succulents</h3>
            <p className='font-regular text-[14px] leading-[24px] absolute right-0 bottom-[50px]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <Button extraClass='w-[140px] absolute bottom-0 right-0 text-white' type='button' rightIcon={<RightArrowIcon />} title='Find More' />
          </div>
        </li>
        <li className='item1 w-[45%] h-[250px] bg-[#FBFBFB] flex justify-end pr-[30px] py-[40px] relative'>
          <Image className='absolute left-[-40px] top-[-50px]' src="/images/MuchMore.png" alt="MuchMore" width={287} height={287} priority />
          <div className='text-right flex flex-col gap-[20px] w-[290px] relative'>
            <h3 className='w-[150px] absolute right-0 top-0 font-black text-[18px] leading-[24px]'>Styling Trends & much more</h3>
            <p className='font-regular text-[14px] leading-[24px] absolute right-0 bottom-[50px]'>We are an online plant shop offering a wide range of cheap and trendy plants</p>
            <Button extraClass='w-[140px] absolute bottom-0 right-0 text-white' type='button' rightIcon={<RightArrowIcon />} title='Find More' />
          </div>
        </li>
      </ul>
      <div>
        <div className='text-center mb-[35px]'>
          <h2 className='font-bold text-[30px] leading-[16px] text-[#3D3D3D] mb-[15px]'>Our Blog Posts</h2>
          <p className='font-bold text-[14px] leading-[24px] text-[#727272]'>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        </div>
        <ul className='flex gap-[44px]'>
          <li className='w-[268px] hover:scale-[1.1] duration-300'>
            <Image className='w-auto h-auto object-cover cursor-pointer'  src={'/images/blogItemImg1.png'} alt='blogItemImg1' width={268} height={195} priority/>
            <div className='p-[12px] bg-[#FBFBFB] group'>
              <p className='font-medium text-[14px] leading-[16px] text-[#46A358] mb-[4px]'>September 12  I Read in 6 minutes</p>
              <h3 className='w-[196px] font-bold text-[20px] leading-[26px] text-[#3D3D3D] mb-[4px]'>Cactus & Succulent Care Tips</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272] mb-[10px]'>Cacti are succulents are easy care plants for any home or patio. </p>
              <button className=' text-black group-hover:text-[#46A358] duration-300 flex items-center gap-[3px] cursor-pointer'>
                <p className='font-medium text-[14px] leading-[16px]'>Read More</p>
                <RightArrowIcon/>
              </button>
            </div>
          </li>
          <li className='w-[268px] hover:scale-[1.1] duration-300'>
            <Image className='w-auto h-auto object-cover cursor-pointer'  src={'/images/blogItemImg2.png'} alt='blogItemImg2' width={268} height={195} priority/>
            <div className='p-[12px] bg-[#FBFBFB] group'>
              <p className='font-medium text-[14px] leading-[16px] text-[#46A358] mb-[4px]'>September 13  I Read in 2 minutes</p>
              <h3 className='w-[196px] font-bold text-[20px] leading-[26px] text-[#3D3D3D] mb-[4px]'>Top 10 Succulents for Your Home</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272] mb-[10px]'>Best in hanging baskets. Prefers medium to high light.</p>
              <button className=' text-black group-hover:text-[#46A358] duration-300 flex items-center gap-[3px]'>
                <p className='font-medium text-[14px] leading-[16px]'>Read More</p>
                <RightArrowIcon/>
              </button>
            </div>
          </li>
          <li className='w-[268px] hover:scale-[1.1] duration-300'>
            <Image className='w-auto h-auto object-cover cursor-pointer'  src={'/images/blogItemImg3.png'} alt='blogItemImg2' width={268} height={195} priority/>
            <div className='p-[12px] bg-[#FBFBFB] group'>
              <p className='font-medium text-[14px] leading-[16px] text-[#46A358] mb-[4px]'>September 15  I Read in 3 minutes</p>
              <h3 className='w-[196px] font-bold text-[20px] leading-[26px] text-[#3D3D3D] mb-[4px]'>Cactus & Succulent Care Tips</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272] mb-[10px]'>Cacti and succulents thrive in containers and because most are.. </p>
              <button className=' text-black group-hover:text-[#46A358] duration-300 flex items-center gap-[3px]'>
                <p className='font-medium text-[14px] leading-[16px]'>Read More</p>
                <RightArrowIcon/>
              </button>
            </div>
          </li>
          <li className='w-[268px] hover:scale-[1.1] duration-300'>
            <Image className='w-auto h-auto object-cover cursor-pointer'  src={'/images/blogItemImg4.png'} alt='blogItemImg' width={268} height={195} priority/>
            <div className='p-[12px] bg-[#FBFBFB] group'>
              <p className='font-medium text-[14px] leading-[16px] text-[#46A358] mb-[4px]'>September 15  I Read in 2 minutes</p>
              <h3 className='w-[196px] font-bold text-[20px] leading-[26px] text-[#3D3D3D] mb-[4px]'>Best Houseplants Room by Room</h3>
              <p className='font-regular text-[14px] leading-[22px] text-[#727272] mb-[10px]'>The benefits of houseplants are endless. In addition to..</p>
              <button className=' text-black group-hover:text-[#46A358] duration-300 flex items-center gap-[3px]'>
                <p className='font-medium text-[14px] leading-[16px]'>Read More</p>
                <RightArrowIcon/>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BlogSection