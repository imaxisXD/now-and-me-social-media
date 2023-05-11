"use client"

import { Button } from "../components/ui/button"
import {
    Card,
    CardContent,
    CardFooter,
} from "../components/ui/card"

import { Textarea } from "./ui/textarea";


type CardProps = React.ComponentProps<typeof Card>

export function FeedPost() {
    return (
        <Card className="w-full md:w-3/4 max-w-[700px] h-auto max-h-md border-2 border-[#35373B] bg-[#27292D]">
            <CardContent className="grid gap-4 mt-5 ">
                <p className="text-[#C5C7CA]">Create post</p>
                <div className="grid gap-2 bg-[#191920] p-3 h-auto rounded-lg">
                    <div className="flex">
                        <div className="bg-[#27292D] flex rounded-full items-center justify-center w-10 h-10">
                            <span>🚀</span>
                        </div>
                        <Textarea className="bg-transparent border-none outline-none text-[#7F8084] placeholder:text-[#7F8084]" placeholder="How are you feeling today?" />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="text-xs font-medium flex justify-end ">
                <Button className="w-28 h-11 bg-btnBlue text-base font-normal" >Post</Button>
            </CardFooter>
        </Card >
    )
}
