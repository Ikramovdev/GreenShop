"use client"
import { Context } from "@/context/AuthContext";
import { instance } from "@/hook/instance";
import { useQuery } from "@tanstack/react-query"; 
import React, { SetStateAction, useContext } from "react";

export interface ProductsType {
    basket: boolean;
    category_id: string;
    cost: number;
    count: number;
    discount: number;
    image_url: string[];
    liked: boolean;
    product_description: string;
    product_id: string;
    product_name: string;
    product_status: string;
    short_description: string;
    size: string[];
    tags: string[];
    totalPrice:number | null;
    
}
interface ParamsType {
    page: number | null,
    limit: number,
    category: string | null,
    tags: string | null,
}
export const getProducts = (categoryName: string | null, tags: string | null, page: number | null, setTotalPage: React.Dispatch<SetStateAction<number>>) => {
    const { token } = useContext(Context)
    const params: ParamsType = {
        page,
        limit: 6,
        category: categoryName == "All" ? null : categoryName,
        tags: tags
    }
    const { data = [] } = useQuery({
        queryKey: ["products", categoryName, tags, page],
        enabled: true,
        queryFn: () => instance().get("/products", {
            headers: token ? { "Authorization": `Bearer ${token}`} : {},
            params: params
        }).then(res => {
            setTotalPage(res.data.total_count)
            return res.data.products
        })
    })
    if (data) {
        return data
    }
    else {
        return []
    }
}