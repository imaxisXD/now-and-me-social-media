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

interface RegisterCardProps {
    toggleHandler: (arg0: string) => void;
    modal: boolean;
    closeModal: () => void;
}

export function RegisterCard({ toggleHandler, modal, closeModal }: RegisterCardProps) {
    const router = useRouter();
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const userStatus = useContext(UserStatusContext);
    const login = userStatus?.login;

    function handleModal() {
        closeModal();
    }
    function handleShowPassword() {
        setShowPassword(prev => !prev);
    }
    function handleRegister(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (user && password) {
            registerCaller();
        }
        else {
            router.push('/feed');
        }
    }
    function handleClick() {
        toggleHandler('login');
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
            case 'user':
                setUser(value);
                break;
            default:
                break;
        }
    }
    async function registerCaller() {
        const data = { username: user, password: password, email: email }
        try {
            const response = await fetch('/api/register', {
                method: "POST",
                body: JSON.stringify(data),
            });
            if (response.ok && response.status === 201) {
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
    return (
        <Card className="w-full md:w-3/4 max-w-md h-fit max-h-md border-none bg-gradient-to-br p-0.5 from-[#969696] to-[#343434]">
            <form onSubmit={handleRegister}>
                <div className="bg-[#27292D] rounded-lg relative">
                    {modal &&
                        <Image src='./Closebutton.svg' width={32} height={32} alt='close' onClick={handleModal} className="absolute top-2 right-2 cursor-pointer" />
                    }
                    <CardHeader className="space-y-1 text-center">
                        <CardTitle className="text-sm font-normal text-greyed tracking-wider mt-3 mb-0.5">SIGN UP</CardTitle>
                        <CardDescription className="text-lg font-medium text-white">
                            Create an account to continue
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 mt-5">
                        <div className="grid gap-2 ">
                            <Label htmlFor="email" className="text-[#C5C7CA]">Email</Label>
                            <Input required id="email" name='email' type="email" className="placeholder:text-[#7F8084] border-[#35373B]" placeholder="Enter your email" onInput={handleInputChange} />
                        </div>
                        <div className="grid gap-2 ">
                            <Label htmlFor="username" className="text-[#C5C7CA]">Username</Label>
                            <Input required id="username" name='username' type="text" className="placeholder:text-[#7F8084] border-[#35373B]" placeholder="Choose a preferred username" onInput={handleInputChange} />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex justify-between items-center">
                                <Label htmlFor="password" className="text-[#C5C7CA] inline-block">Password</Label>
                            </div>
                            <div className="relative">
                                <Input required name="password" id="password" type={showPassword ? 'text' : 'password'} className="placeholder:text-[#7F8084] border-[#35373B] " placeholder="Choose a strong password" onInput={handleInputChange} />
                                <Image width={20} height={20}
                                    className="absolute top-1/2 transform -translate-y-1/2 right-4"
                                    alt="show password"
                                    src="/eye.svg"
                                    onClick={handleShowPassword}
                                />
                            </div>
                        </div>
                        <Button className="w-full bg-btnBlue text-base font-normal" type='submit'>Continue</Button>
                    </CardContent>
                    <CardFooter className="text-xs font-medium">
                        <span className="text-[#7F8084]">Already have an account?<span className="text-[#C5C7CA] cursor-pointer" onClick={handleClick}> Login →</span></span>
                    </CardFooter>
                </div>
            </form>
        </Card>
    )
}