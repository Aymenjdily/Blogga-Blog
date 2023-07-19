import { connectToDB } from "@/utils/database";
import Post from "@/models/post";
import { NextRequest } from "next/server";

// Get

export const GET = async (req:NextRequest, { params }:any) => {
    try{
        await connectToDB()

        const post = await Post.findById(params.id).populate('creator')

        if(!post){
            return new Response("Post not found", { status:404 })
        }

        return new Response(JSON.stringify(post), {status:200})
    }
    catch(error){
        return new Response('Failed to fetch the Post', {status:500})
    }
}
