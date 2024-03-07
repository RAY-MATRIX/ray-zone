import { FC, ReactNode } from 'react'
import Container from '@/components/Container'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import classNames from 'classnames'

export const metadata = {
  title: 'homepage',
  description: 'homepage of rayzone',
}

interface Props {
  size?: 'default' | 'small'
  variant?: 'default' | 'home'
  children: ReactNode
}

const MainLayout: FC<Props> = ({
  size = 'default',
  variant = 'default',
  children,
}) => {
  return (
    <div className="flex flex-col min-h-[100vh]">
      <header className="bg-yellow-400">
        <Container>
          <Header size={size} />
        </Container>
      </header>
      <div className="flex flex-1 flex-col"> {children}</div>
      <footer className={classNames(variant === 'home' && ['bg-yellow-400'])}>
        <Container>
          <Footer />
        </Container>
      </footer>
    </div>
  )
}

export default MainLayout
