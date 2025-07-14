import type { Metadata } from 'next'
import './globals.css'
import { robotoCondensed } from './fonts/roboto-condensed';
import { fellFrench } from './fonts/fell-french';  

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${robotoCondensed.variable} ${fellFrench.variable}`}>
      <body>{children}</body>
    </html>
  )
}
