import './globals.css'
import { Inter } from 'next/font/google'
import { UserStatusProvider } from './userStatus'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Now and me social media',
  description: 'Now and me assignment done bye abhishek',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserStatusProvider>{children}</UserStatusProvider>
      </body>
    </html>
  )
}
