"use client"

import Image from 'next/image';
import CardWrapper from '../../components/cardWrapper'
import AlertCard from '../../components/alertCard';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-customBg relative">
      <Image src='./nownmelogo.svg' alt='now and me' className="mb-12" width={40} height={40} />
      <CardWrapper cardName="login" />
      <AlertCard />
    </main>
  )
}
