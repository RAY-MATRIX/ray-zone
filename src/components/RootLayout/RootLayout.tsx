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
        {/* <div className="flex flex-col min-h-[100vh]">
          <header className="bg-yellow-400">
            <Container>
              <Header />
            </Container>
          </header>
          <div className="flex flex-1 flex-col"> {children}</div>
          <footer>
            <Container>
              <Footer />
            </Container>
          </footer>
        </div> */}
      </body>
    </html>
  )
}

export default RootLayout
