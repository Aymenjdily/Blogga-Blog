import Post from "@/models/post";
import { connectToDB } from "@/utils/database";
import { NextRequest } from "next/server";

export const POST = async (request:NextRequest) => {
    const { userId, title, image, category, description, firstParagraph, secondParagraph, quote } = await request.json();

    try {
        await connectToDB();
        const newPost = new Post({ creator: userId, image, title, category, description, firstParagraph, secondParagraph, quote });

        await newPost.save();
        console.log(newPost)
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Post", { status: 500 });
    }
}