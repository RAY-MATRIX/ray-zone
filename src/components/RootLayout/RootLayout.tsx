import Container from '@/components/Container'
import Header from '@/components/Header'
import { Inter } from 'next/font/google'
import { FC, ReactElement, ReactNode } from 'react'
import Footer from '../Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'homepage',
  description: 'homepage of rayzone',
}

interface Props {
  children: ReactNode
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
