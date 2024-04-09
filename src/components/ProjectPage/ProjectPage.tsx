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
    src: '../images/clenergy.jpg',
  },
  {
    id: '1',
    name: 'Blygo',
    url: 'https://blygo.com.au/',
    description: '',
    src: '../images/blygo.jpg',
  },
  {
    id: '2',
    name: 'BANG XIN Company',
    url: 'https://www.bxsemi.com/en/',
    description: '',
    src: '../images/bxsemi.jpg',
  },
  {
    id: '3',
    name: 'Brand Trigram Company',
    url: 'https://brandtrigram.com/',
    description: '',
    src: '../images/trigram.jpg',
  },
  {
    id: '4',
    name: 'Big man Trailer',
    url: 'https://bigmantrailer.com.au/',
    description: '',
    src: '../images/bigmantrailer.jpg',
  },
  {
    id: '5',
    name: 'Capstone Caravans',
    url: 'https://capstonecaravans.com.au/',
    description: '',
    src: '../images/capstonecaravans.jpg',
  },
  {
    id: '6',
    name: 'Energy Cloud Australia',
    url: 'https://energycloudaustralia.com.au/',
    description: '',
    src: '../images/energycloudaustralia.jpg',
  },
  {
    id: '7',
    name: 'Mying Toolbox',
    url: 'https://myingtoolbox.com.au/',
    description: '',
    src: '../images/mying.jpg',
  },
  {
    id: '8',
    name: 'Optinest',
    url: 'https://www.optinest.com.au/',
    description: '',
    src: '../images/optinest.jpg',
  },
  {
    id: '9',
    name: 'Ahli Shop',
    url: 'https://ahlishop.com/',
    description: '',
    src: '../images/ahli.jpg',
  },
  {
    id: '10',
    name: 'Jeri',
    url: 'https://jeripower.com/au/',
    description: '',
    src: '../images/jeri.jpg',
  },
  {
    id: '11',
    name: 'ANV Consultants',
    url: 'https://anvconsultants.com.au/',
    description: '',
    src: '../images/anv-consultants.jpg',
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
