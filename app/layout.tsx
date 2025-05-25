import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SyphaX',
  description: 'Created by syphax saidani',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logofavicon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
