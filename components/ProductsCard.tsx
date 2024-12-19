"use client"
import { ProductsType } from '@/service/getProducts'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { instance } from '@/hook/instance'
import { Context } from '@/context/AuthContext'
import { BasketIcon, LikeIcon } from '@/public/icon/Icon'
import { useRouter } from 'next/router'

const ProductsCard: React.FC<{ item: ProductsType }> = ({ item }) => {
  const router = useRouter()
  const [hoverContent, setHoverContent] = useState<boolean>()
  const { token } = useContext(Context)
  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationFn: (id: string) => instance().post(`/like/${id}`, {}, {
      headers: { "Authorization": `Bearer ${token}` },
    }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] })
    }
  })

  return (
    <div onMouseEnter={() => setHoverContent(true)} onMouseLeave={() => setHoverContent(false)} className={`w-[300px] productCard text-center duration-300 translate-y-5 pb-[20px] rounded-md`}>
      <button onClick={() => router.push(`/shop/${item.product_id}`)}>
        <Image className='block mx-auto' style={{ width: '250px', height: '250px' }} src={item.image_url ? item.image_url[0] : '/images/heroImg.png'} alt='ProductImg' width={260} height={260} priority />
      </button>
      <h2 className='mt-5 font-regular text-[16px] leading-[16px] text-[#3D3D3D] mb-[6px]'>{item.product_name}</h2>
      <div className='flex items-center space-x-2 justify-center'>
        {item.discount && <strong className='font-bold text-[18px] leading-[16px] text-[#46A358]'>{item.discount}$</strong>}
        <del className='font-regular text-[18px] text-[#A5A5A5] laeding-[16px]'>{item.cost}$</del>
      </div>
      {hoverContent ?
        <div className='flex items-center space-x-[20px] mb-[20px] justify-center duration-300'>
          {item.liked ?
            <button onClick={() => token ? likeMutation.mutate(item.product_id) : alert('You are not registered yet.')} type='button'><Image src='/images/likeActive.svg' alt='likeActive' width={20} height={20} priority /></button>
            :
            <button onClick={() => token ? likeMutation.mutate(item.product_id) : alert('You are not registered yet.')} type='button'><LikeIcon /></button>
          }
          <button className={`${item.basket && "text-[#46A358]"}`} type='button' ><BasketIcon /></button>
        </div>
        :
        ""}
    </div>
  )
}

export default ProductsCard