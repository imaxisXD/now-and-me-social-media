"use client"
import Image from "next/image"
import { ChangeEvent, useState, useContext } from "react"
import { UserStatusContext } from "@/app/userStatus"
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
import { useRouter } from 'next/navigation';
interface LoginCardProps {
    toggleHandler: (arg0: string) => void;
    modal: boolean;
    closeModal: () => void;
}

export function LoginCard({ toggleHandler, modal, closeModal }: LoginCardProps) {
    const router = useRouter();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const userStatus = useContext(UserStatusContext);
    const login = userStatus?.login;

    function handleShowPassword() {
        setShowPassword(prev => !prev);
    }
    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (user && password) {
            loginCaller();
        }
        else {
            router.push('/feed');
        }
    }
    function handleKeyChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setUser(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }
    async function loginCaller() {
        const data = { username: user, password: password }
        try {
            const response = await fetch('/api/login', {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok && response.status === 200) {
                if (login) {
                    login();
                    if (modal) {
                        closeModal();
                    }
                    router.push('/feed');
                }
            }
            else {
                throw new Error('Request failed with status ' + response.status);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    function handleClick() {
        toggleHandler('register');
    }
    function handleInputBlur() {
        const isInputEmail = isEmailValid(user);
        setIsEmail(isInputEmail);
    }
    function isEmailValid(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    function handleModal() {
        closeModal();
    }

    return (
        <Card className="w-full md:w-3/4 max-w-md h-fit max-h-md border-none bg-gradient-to-br p-0.5 from-[#969696] to-[#343434]">
            <form onSubmit={handleLogin}>
                <div className="bg-[#27292D] rounded-lg relative">
                    {modal &&
                        <Image src='./Closebutton.svg' width={32} height={32} alt='close' onClick={handleModal} className="absolute top-2 right-2 cursor-pointer" />
                    }
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-sm font-normal text-greyed tracking-wide mt-3 mb-0.5">WELCOME BACK</CardTitle>
                        <CardDescription className="text-lg font-medium text-white">
                            Log into your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 mt-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email" className="text-[#C5C7CA]">Email or Username</Label>
                            <Input id="email" name="email" type={isEmail ? 'email' : 'text'} onChange={handleKeyChange} className="placeholder:text-[#7F8084] border-[#35373B]" placeholder="Enter your email or username"
                                onBlur={handleInputBlur}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-[#C5C7CA] inline-block">Password</Label>
                                <span className="text-[#C5C7CA] inline text-xs">Forgot password?</span>
                            </div>
                            <div className="relative">
                                <Input name="password" id="password" type={showPassword ? 'text' : 'password'} onChange={handleKeyChange} className="placeholder:text-[#7F8084] border-[#35373B] " placeholder="Enter your password" />
                                <Image width={20} height={20}
                                    className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                                    alt="show password"
                                    src="/eye.svg"
                                    onClick={handleShowPassword}
                                />
                            </div>
                        </div>
                        <Button type='submit' className="w-full bg-btnBlue text-base font-normal">Login now</Button>

                    </CardContent>
                    <CardFooter className="text-xs font-medium">
                        <span className="text-[#7F8084]">Not registered yet?<span className="text-[#C5C7CA] cursor-pointer" onClick={handleClick} > Register →</span></span>
                    </CardFooter>
                </div>
            </form >
        </Card >
    )
}