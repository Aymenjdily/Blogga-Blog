"use client"

import { useContext } from "react";
import { PostContext } from "@/context/postContext";

export const usePost = () => {
    const context = useContext(PostContext)

    if(!context) {
        throw Error('use the Context Provider inside the Layout App')
    }

    return context
}