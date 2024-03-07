'use client'
import { FC } from 'react'
import Slide from './components/Slide'
import SliderControl from './components/SliderControl'
import classNames from 'classnames'
import Button from '../Button'
import { SlideProp } from './components/Slide/Slide'
import SlideContent from './components/SlideContent'

interface Props {
  slides: SlideProp[]
  current: number
  setCurrent: (arg: number) => void
}

const Slider: FC<Props> = ({ slides, current, setCurrent }) => {
  const handlePreviousClick = () => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index)
    }
  }
  const offset = current * (100 / slides.length)

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex-1 pr-6 order-2 sm:order-1">
        <SlideContent currentSlide={slides[current]} />
      </div>
      <div
        className={classNames(
          ['mx-auto relative overflow-hidden'],
          ['w-full sm:w-[66%] h-[140vw] sm:h-[600px] mb-2'],
          ['order-1 md:order-2']
        )}>
        <ul
          className={classNames(
            ['flex my-0 mx-auto absolute transition-transform'],
            ['left-[5px] sm:left-[20px]']
          )}
          style={{
            transform: `translateX(calc(-${offset}% )) `,
            // marginLeft: 'calc(33%)',
          }}>
          {slides.map((slide, index) => (
            <Slide
              key={slide.id}
              slide={slide}
              index={index}
              current={current}
              handleSlideClick={() => handleSlideClick(index)}
            />
          ))}
        </ul>

        <div
          className={classNames(
            ['flex absolute z-50 justify-left w-full gap-3'],
            ['left-[29%]', 'sm:left-auto']
          )}
          style={{ top: 'calc(100% - 4rem)', marginLeft: 'calc( 16% - 35px)' }}>
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={handlePreviousClick}
          />

          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={handleNextClick}
          />
        </div>
      </div>
    </div>
  )
}

export default Slider
