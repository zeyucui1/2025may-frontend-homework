import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import ReduxProvider from '@/components/ReduxProvider'

export const metadata: Metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart Example with Next.js and React',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <nav className="flex gap-6 p-4 bg-gray-100 text-lg shadow">
        <Link href="/">Home</Link>
        <Link href="/product">Products</Link>
        <Link href="/cart">Cart</Link>
      </nav>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
