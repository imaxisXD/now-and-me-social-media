"use client"
import { FeedPost } from "../../../components/feedPost"
import { FeedTimeLine } from "../../../components/feedTimeLine"
import { feedData } from "@/lib/feedData";
import { useState } from "react";

interface NewPost {
    imageURL: string;
    name: string;
    emoji: string;
    time: string;
    content: string;
    comments: number;
}
export default function Feed() {
    const [feedPosts, setFeedPosts] = useState(feedData);
    const name = 'Jane'
    function handleNewPostCreation(newPost: NewPost) {
        setFeedPosts([newPost, ...feedPosts]);
    }
    return (
        <main className="flex min-h-screen flex-col items-center bg-customBg relative pb-3">
            <div className="text-left w-full md:w-3/4 max-w-[700px] mt-9 mb-7">
                <h1 className="text-[#C5C7CA] text-2xl font-medium	mb-2">Hello {name}</h1>
                <p className="text-[#7F8084] text-base font-normal w-3/4">How are you doing today? Would you like to share something with the community 🤗</p>
            </div>
            <FeedPost setFeedPosts={handleNewPostCreation} />
            <FeedTimeLine feedPosts={feedPosts} />
        </main>
    )
}