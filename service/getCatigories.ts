"use client"
import { instance } from "@/hook/instance";
import { useEffect } from "react";


export interface CategoryType {
    category_id: string | null;
    category_name: string | null;
}


export const getCategories = () => {
    useEffect(() => {
        instance().get("/categories", { params: { page: 1, limit: 100 } })
        .then(res => 
            console.log(res.data)
        )
}, [])
}