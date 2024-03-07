'use client'
import { FC, useState } from 'react'
import Button from '@/components/Button'
import Slider from '@/components/Slider'
import Grid from '@/components/Grid'
import { SlideProp } from '@/components/Slider/components/Slide/Slide'

interface Props {
  slides: SlideProp[]
}
type Layout = 'grid' | 'slider'

const Projects: FC<Props> = ({ slides }) => {
  const [layout, setLayout] = useState<Layout>('grid')
  const [current, setCurrent] = useState<number>(0)
  return (
    <div className="py-6 mx-auto">
      <div className="flex justify-between align-center pb-8">
        <h1 className="leading-8 text-2xl">Projects</h1>
        <div className="flex gap-2 justify-end">
          <Button variant="link" onClick={() => setLayout('grid')}>
            GRID
          </Button>
          <span className="text-sm leading-8">/</span>
          <Button variant="link" onClick={() => setLayout('slider')}>
            SLIDER
          </Button>
        </div>
      </div>

      {layout === 'grid' ? (
        <Grid
          list={slides}
          setCurrent={(index) => setCurrent(index)}
          setLayout={() => setLayout('slider')}
        />
      ) : (
        <Slider
          slides={slides}
          current={current}
          setCurrent={(index) => setCurrent(index)}
        />
      )}
    </div>
  )
}

export default Projects
