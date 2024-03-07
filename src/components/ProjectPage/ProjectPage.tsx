import { FC } from 'react'
import Container from '@/components/Container'
import Projects from './components/Projects'
import MainLayout from '../MainLayout'
const data = [
  {
    id: '0',
    name: 'Clenergy Company',
    url: 'https://www.clenergy.com.au/',
    description: '',
    src: '',
  },
  {
    id: '1',
    name: 'ZHONG HONG Company',
    url: 'https://www.zh-et.cn/en/',
    description: '',
    src: '',
  },
  {
    id: '2',
    name: 'BANG XIN Company',
    url: 'https://www.bxsemi.com/en/',
    description: '',
    src: '',
  },
  {
    id: '3',
    name: 'Brand Trigram Company',
    url: 'https://brandtrigram.com/',
    description: '',
    src: '',
  },
  {
    id: '4',
    name: 'Big man Trailer',
    url: 'https://bigmantrailer.com.au/',
    description: '',
    src: '',
  },
  {
    id: '5',
    name: 'Capstone Caravans',
    url: 'https://capstonecaravans.com.au/',
    description: '',
    src: '',
  },
  {
    id: '6',
    name: 'RVBarn Company',
    url: 'https://rvbarn.com.au/',
    description: '',
    src: '',
  },
  {
    id: '7',
    name: 'Mying Toolbox',
    url: 'https://myingtoolbox.com.au/',
    description: '',
    src: '',
  },
  {
    id: '8',
    name: 'Maptco Fasteners',
    url: 'https://maptco.com.au/shop/',
    description: '',
    src: '',
  },
  {
    id: '9',
    name: 'Ahli Shop',
    url: 'https://ahlishop.com/',
    description: '',
    src: '',
  },
]

const ProjectPage: FC = () => {
  return (
    <MainLayout size="small">
      <Container>
        <Projects slides={data} />
      </Container>
    </MainLayout>
  )
}

export default ProjectPage
