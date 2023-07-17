"use client"

import { useContext } from "react";
import { UserPostContext } from "@/context/userPostsContext";

export const usePost = () => {
    const context = useContext(UserPostContext)

    if(!context) {
        throw Error('use the Context Provider inside the Layout App')
    }

    return context
}