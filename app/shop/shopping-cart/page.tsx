"use client"
import { Context } from '@/context/AuthContext'
import { instance } from '@/hook/instance'
import { ProductsType } from '@/service/getProducts'
import { useQuery } from '@tanstack/react-query'
import React, { useContext, useState } from 'react'


const page = () => {
  const { token } = useContext(Context)
  const { data } = useQuery({
    queryKey: ["basket_get_all"],
    queryFn: () => instance().get("/basket", {
      headers: { "Authorization": `Bearer ${token}` },
      params: { page: 1, limit: 100, }
    }).then(res => res.data)
  })
  console.log(data);
  
  const [basketPorudcts, setBasketProducts] = useState<ProductsType[]>(data.map((item:ProductsType) => {
    item.count = 0
    item.totalPrice = item.count * item.cost
    return item
  }))
  return (
    <div>Products basket get all </div>
  )
}

export default page