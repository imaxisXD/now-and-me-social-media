"use client";
import {
    Card,
    CardContent,
    CardFooter,
} from "./ui/card";
import { feedData } from "../src/lib/feedData"
import Image from "next/image";

export function FeedTimeLine() {
    return (
        <>
            {feedData.map((post, index) => (
                <Card key={index} className="w-full md:w-3/4 max-w-[700px] h-auto max-h-md border-2 border-[#35373B] bg-[#27292D] mt-1 mb-1">
                    <CardContent className="grid gap-4 mt-5 ">
                        <div className="flex justify-between">
                            <div className="flex">
                                <Image src={post.imageURL} width={44} height={44} alt={post.name} className='rounded-full mr-3' />
                                <div className="flex flex-col">
                                    <p className="text-[#C5C7CA]">{post.name}</p>
                                    <p className="text-[#7F8084] text-xs"> {post.time}</p>
                                </div>
                            </div>
                            <div>
                                <Image src='/DotsHorizontal.svg' alt='options' width={20} height={20} />
                            </div>
                        </div>
                        <div className="grid gap-2 bg-[#191920] p-3 h-auto rounded-lg">
                            <div className="flex items-start">
                                <div className="bg-[#27292D] flex rounded-full items-center justify-center w-10 h-10">
                                    <span>{post.emoji}</span>
                                </div>
                                <p className="bg-transparent border-none text-[#7F8084] w-11/12 ml-3 ">
                                    {post.content}
                                </p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="text-xs font-medium">
                        <span className="text-base font-normal" >{post.comments} Comments</span>
                    </CardFooter>
                </Card>
            ))}
        </>
    );
}