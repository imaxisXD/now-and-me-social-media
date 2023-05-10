import Image from 'next/image'
import { LoginCard } from '../../components/loginCard'
import { Alert, AlertDescription, AlertTitle } from "../../components/ui/alert"
import { Terminal } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-customBg">
      <Image src='./nownmelogo.svg' alt='now and me' className="mb-12" width={40} height={40} />
      <LoginCard />
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add enter username and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </main>
  )
}
