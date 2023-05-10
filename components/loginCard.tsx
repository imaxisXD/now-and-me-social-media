"use client"

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
        <Card className="w-2/4 h-2/4 max-w-md max-h-md bg-[#27292D]">
            <CardHeader className="space-y-1 text-center">
                <CardTitle className="text-xs text-greyed tracking-wide">WELCOME BACK</CardTitle>
                <CardDescription className="font-semibold text-sm text-white">
                    Log into your account
                </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
                <div className="grid gap-2">
                    <Label htmlFor="email" className="text-[#C5C7CA]">Email or Username</Label>
                    <Input id="email" type="email" className="text-[#7F8084]" placeholder="Enter your email or username" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password" className="text-[#C5C7CA]">Password</Label>
                    <Input id="password" type="password" className="text-[#7F8084]" placeholder="Enter your password" />
                </div>
                <Button className="w-full bg-btnBlue text-base font-normal	">Login now</Button>
            </CardContent>
            <CardFooter className="text-xs font-medium">
                <span className="text-[#7F8084]">Not registered yet?<span className="text-[#C5C7CA]"> Register →</span></span>
            </CardFooter>
        </Card>
    )
}