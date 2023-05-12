"use client"

import Image from 'next/image'
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert"
import { XCircle } from "lucide-react"
import { useState } from 'react';
import CardWrapper from '../../components/cardWrapper'

export default function Home() {
  const [alert, setAlert] = useState(true);

  function handleAlert() {
    setAlert(prev => !prev);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-customBg relative">
      <Image src='./nownmelogo.svg' alt='now and me' className="mb-12" width={40} height={40} />
      <CardWrapper cardName="login" />

      {alert && <Alert className='w-auto flex h-auto max-w-sm fixed top-5 right-1'>
        <XCircle className="h-4 w-4 cursor-pointer" onClick={handleAlert} />
        <AlertTitle className='inline-block w-40 h-auto'>
          <Image src='./logocolor.svg' width={40} className="bg-[#1b1b1b] " height={40} alt='now and me' />
        </AlertTitle>
        <AlertDescription>
          You can add enter <strong>username: <span className="text-[#ff6d42]">nowandme</span></strong> and <strong>password: <span className="text-[#ff6d42]">nowandme</span></strong> / Or can create a new account.
        </AlertDescription>
      </Alert>}

    </main>
  )
}
