import type { Metadata } from 'next'
import './globals.css'
import { robotoCondensed } from './fonts/roboto-condensed';
import { fellFrench } from './fonts/fell-french';  

export const metadata: Metadata = {
  title: 'Lawyer Darshan',
  description: 'Migration Lawyer Australia',
    icons: {
    icon: '/favicon.png', // or .png, .svg depending on what you have
  }
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
