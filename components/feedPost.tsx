"use client"
import { useContext, useState } from "react";
import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "../components/ui/card"
import { Textarea } from "./ui/textarea";
import { UserStatusContext } from "@/app/userStatus"


interface NewPost {
    imageURL: string;
    name: string;
    emoji: string;
    time: string;
    content: string;
    comments: number;
}
interface FeedPostProp {
    setFeedPosts: (newPost: NewPost) => void;
    openModal: () => void;
}
export function FeedPost({ setFeedPosts, openModal }: FeedPostProp) {
    const [post, setPost] = useState('');
    const userStatus = useContext(UserStatusContext);

    function handlePost(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (userStatus?.isLoggedIn) {
            if (post) {
                const newPost: NewPost = {
                    imageURL: '/logocolor.svg',
                    name: 'Now&Me',
                    emoji: '🔥',
                    time: 'Recent',
                    content: post,
                    comments: 0
                }
                setFeedPosts(newPost);
                setPost("");
            }
        }
        else {
            openModal();
        }

    }

    return (
        <Card className="w-full md:w-3/4 max-w-[700px] h-auto max-h-md border-2 border-[#35373B] bg-[#27292D] mb-1">
            <form onSubmit={handlePost}>
                <CardContent className="grid gap-4 mt-5 ">
                    <p className="text-[#C5C7CA]">Create post</p>
                    <div className="grid gap-2 bg-[#191920] p-3 h-auto rounded-lg">
                        <div className="flex">
                            <div className="bg-[#27292D] flex rounded-full items-center justify-center w-10 h-10">
                                <span>💜</span>
                            </div>
                            <Textarea required className="bg-transparent border-none outline-none text-[#7F8084] placeholder:text-[#7F8084]" placeholder="How are you feeling today?" onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPost(e.target.value)} value={post} />
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="text-xs font-medium flex justify-end ">
                    <Button className="w-28 h-11 bg-btnBlue text-base font-normal">Post</Button>
                </CardFooter>
            </form>
        </Card >
    )
}
