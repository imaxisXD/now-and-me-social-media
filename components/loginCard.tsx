"use client"

import Image from "next/image"
import { Button } from "./ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"


export function LoginCard() {
    return (
        <Card className="w-full md:w-3/4 max-w-md h-2/4 max-h-md border-none bg-gradient-to-br p-0.5 from-[#969696] to-[#343434]">
            <div className="bg-[#27292D] rounded-lg">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-sm font-normal text-greyed tracking-wider mt-3 mb-0.5">WELCOME BACK</CardTitle>
                    <CardDescription className="text-lg font-medium text-white">
                        Log into your account
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4 mt-5">
                    <div className="grid gap-2 ">
                        <Label htmlFor="email" className="text-[#C5C7CA]">Email or Username</Label>

                        <Input id="email" type="email" className="placeholder:text-[#7F8084] border-[#35373B]" placeholder="Enter your email or username" />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex justify-between items-center">
                            <Label htmlFor="password" className="text-[#C5C7CA] inline-block">Password</Label>
                            <span className="text-[#C5C7CA] inline text-xs">Forgot password?</span>
                        </div>
                        <div className="relative">
                            <Input id="password" type="password" className="placeholder:text-[#7F8084] border-[#35373B] " placeholder="Enter your password" />
                            <Image width={20} height={20}
                                className="absolute top-1/2 transform -translate-y-1/2 right-4"
                                alt="show password"
                                src="/eye.svg"
                            />
                        </div>
                    </div>
                    <Button className="w-full bg-btnBlue text-base font-normal	">Login now</Button>
                </CardContent>
                <CardFooter className="text-xs font-medium">
                    <span className="text-[#7F8084]">Not registered yet?<span className="text-[#C5C7CA]"> Register →</span></span>
                </CardFooter>
            </div>

        </Card>
    )
}