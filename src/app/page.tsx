import Image from 'next/image'
import { LoginCard } from '../../components/loginCard'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-customBg">


      <LoginCard />

    </main>
  )
}
