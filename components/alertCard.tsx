'use client'
import Image from 'next/image'
import { XCircle } from "lucide-react"
import { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert"
export default function AlertCard() {
    const [alert, setAlert] = useState(true);

    function handleAlert() {
        setAlert(false);
    }
    if (!alert) {
        return null;
    }

    return (
        <Alert className='w-auto flex h-auto max-w-sm fixed top-5 right-1'>
            <XCircle className="h-4 w-4 cursor-pointer" onClick={handleAlert} />
            <AlertTitle className='inline-block w-40 h-auto'>
                <Image src='./logocolor.svg' width={40} className="bg-[#1b1b1b] " height={40} alt='now and me' />
            </AlertTitle>
            <AlertDescription>
                Enter <strong>username: <span className="text-[#ff6d42]">nowandme</span></strong> and <strong>password: <span className="text-[#ff6d42]">nowandme</span></strong> or Register. <strong>If in a <span className="text-[#ff6d42]">hurry click directly</span> to login button 🚀</strong>
            </AlertDescription>
        </Alert>
    )
}