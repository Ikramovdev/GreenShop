"use client"
import Button from "@/components/Button";
import Image from "next/image";
import { CategoryType, getCategories } from "../service/getCatigories";
import { getProducts, ProductsType } from "@/service/getProducts";
import ProductsCard from "@/components/ProductsCard";
import { useState } from "react";
import { Pagination } from "@nextui-org/pagination";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  const [categoryName, setCategoryName] = useState<string | null>(null)
  const categories: CategoryType[] = getCategories()
  const [tags, setTags] = useState<string | null>(null)
  const [page, setPage] = useState<number | null>(1)
  const [totalPage, setTotalPage] = useState<number>(10)

  const products: ProductsType[] = getProducts(categoryName, tags, page, setTotalPage)

  return (
    <main>
      <section className="mt-[12px] mb-[46px]">
        <div className="w-[1200px] mx-auto hero-section flex items-center justify-between">
          <div className="w-[560px] pt-[68px] pl-[43px] pb-[85px]">
            <p className="font-medium text-[14px] text-[#3D3D3D] leading-[16px] mb-[7px]">Welcome to GreenShop</p>
            <h1 className="font-black text-[70px] leading-[70px] mb-[7px]">Let’s Make a Better <span className="text-[#46A358]">Planet</span></h1>
            <p className="font-medium text-[14px] text-[#727272] leading-[24px] mb-[44px]">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
            <Button type="button" title="SHOP NOW" />
          </div>
          <Image src='/images/heroImg.png' alt="hero-img" width={518} height={518} priority />
        </div>
      </section>
      <section>
        <div className="w-[1200px] mx-auto mt-[26px] mb-[94px] flex justify-between">
          <div className="w-[20%] p-5 bg-[#FBFBFB] h-[100vh]">
            <ul className="space-y-5 mb-[10px]">
              {[{ categoryName: "all", category_id: null }, ...categories]?.map((item: any | CategoryType) => <li key={item.category_id} onClick={() => setCategoryName(item.category_name)}>{item.category_name}</li>)}
            </ul>
            <Image className="w-[400px] h-[370]" src='/images/SaleBanner.png' alt="SaleBanner" priority width={370} height={370} />
          </div>
          <div className="w-[78%] flex flex-col">
            <ul className="flex items-center gap-10">
              <li onClick={() => setTags(null)} className={`font-regular text-[15px] leading-[16px] text-[#3D3D3D] cursor-pointer ${tags == null && 'text-green-500 border-b-[2px] border-[#46A358] duration-300 pb-[7px]'} `}>All Plants</li>
              <li onClick={() => setTags('new_arrivals')} className={`font-regular text-[15px] leading-[16px] text-[#3D3D3D] cursor-pointer ${tags == 'new_arrivals' && 'text-green-500 border-b-[2px] border-[#46A358] duration-300 pb-[7px]'} `}>New Arrivals</li>
              <li onClick={() => setTags('sale')} className={`font-regular text-[15px] leading-[16px] text-[#3D3D3D] cursor-pointer ${tags == 'sale' && 'text-green-500 border-b-[2px] border-[#46A358] duration-300 pb-[7px]'} `}>Sale</li>
            </ul>
            <div className="flex items-center gap-[18px] flex-wrap mt-[31px]">
              {products ? products?.map((item: ProductsType) => <ProductsCard key={item.product_id} item={item} />) : <Image src={"/images/noImage.jpg"} alt="NoImage" width={260} height={260} priority />}
            </div>
            <div className="flex justify-end py-10">
              <Pagination onClick={(e) => setPage(1 )} color="success" total={totalPage / 6} initialPage={page ? page : 1} size="lg" />
            </div>
          </div>
        </div>
      </section>
      <BlogSection />
    </main>
  )
}
