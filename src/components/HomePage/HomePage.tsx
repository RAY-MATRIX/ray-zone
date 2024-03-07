import { FC } from 'react'
import Container from '@/components/Container'
import MainLayout from '../MainLayout'
import Link from '../Link'

const HomePage: FC = () => {
  return (
    <MainLayout variant="home">
      <div className="flex flex-1 flex-col justify-center w-full">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl mb-4">Welcome to Ray Zone!</h1>
            <p>
              Hi I'm Ray, I'm a full stack web developer living in Melbourne.
              <br />
              Let's embark on this web development journey together!
            </p>
          </div>
          <div className="text-center mt-10">
            <p className="mb-2">GET IN TOUCH</p>
            <Link
              className="hover:underline text-2xl"
              href="mailto:rayqu.work@gmail.com"
              title="email">
              rayqu.work@gmail.com
            </Link>
          </div>
        </Container>
      </div>
    </MainLayout>
  )
}

export default HomePage
