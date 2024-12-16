"use client"
import { ProductsType } from '@/service/getProducts'
import Image from 'next/image'
import React, { useContext } from 'react'
import Button from './Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { instance } from '@/hook/instance'
import { Context } from '@/context/AuthContext'

const ProductsCard: React.FC<{ item: ProductsType }> = ({ item }) => {
  const {token} = useContext(Context)
  const queryClient = useQueryClient()

  const likeMutation = useMutation({
    mutationFn:(id:string) => instance().post(`/like/${id}`,{},{
      headers:{"Authorization":`Bearer${token}`}
    }),
    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["products"]})
    }
  })

  return (
    <div className='w-[300px]'>
      <Image style={{ width: '250px', height: '250px' }} src={item.image_url ? item.image_url[0] : '/images/heroImg.png'} alt='ProductImg' width={260} height={260} priority />
      <h2 className='mt-5 font-regular text-[16px] leading-[16px] text-[#3D3D3D] mb-[6px]'>{item.product_name}</h2>
      <div className='flex items-center space-x-2 '>
        {item.discount && <strong className='font-bold text-[18px] leading-[16px] text-[#46A358]'>{item.discount}</strong>}
        <strong className='font-regular text-[18px] text-[#A5A5A5] laeding-[16px]'>{item.cost}</strong>
      </div>
      <div className='flex items-center space-x-2'>
        <Button onclick={() => token ? likeMutation.mutate(item.product_id):{}} type='button' title='Like' ></Button>
        <Button type='button' title='Basket' ></Button>
      </div>
    </div>
  )
}

export default ProductsCard