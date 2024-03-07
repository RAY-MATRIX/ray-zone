import { FC, useRef, MouseEvent, SyntheticEvent } from 'react'
import classNames from 'classnames'

export interface SlideProp {
  id: string
  src: string
  url: string
  name: string
  description: string
}

interface SlideProps {
  slide: SlideProp
  current: number
  index: number
  handleSlideClick: (index: number) => void
}

const Slide: FC<SlideProps> = ({ slide, current, index, handleSlideClick }) => {
  const slideRef = useRef<HTMLLIElement>(null)

  // const handleMouseMove = (event: MouseEvent<HTMLLIElement>) => {
  //   const el = slideRef.current
  //   if (!el) return

  //   const r = el.getBoundingClientRect()

  //   el.style.setProperty(
  //     '--x',
  //     `${event.clientX - (r.left + Math.floor(r.width / 2))}px`
  //   )
  //   el.style.setProperty(
  //     '--y',
  //     `${event.clientY - (r.top + Math.floor(r.height / 2))}px`
  //   )
  // }

  // const handleMouseLeave = () => {
  //   if (slideRef.current) {
  //     slideRef.current.style.setProperty('--x', '0')
  //     slideRef.current.style.setProperty('--y', '0')
  //   }
  // }

  const imageLoaded = (event: SyntheticEvent<HTMLImageElement>) => {
    if (event.currentTarget) {
      event.currentTarget.style.opacity = '1'
    }
  }

  let slideClassNames = ''

  if (current === index) slideClassNames = 'slide-current'
  else if (current - 1 === index) slideClassNames = 'slide-previous'
  else if (current + 1 === index) slideClassNames = 'slide-next'

  return (
    <li
      ref={slideRef}
      className={classNames(
        ['text-white', 'opacity-100', 'bg-transparent'],
        ['flex', 'flex-col', 'justify-center', 'align-center'],
        ['mx-3 sm:mx-2', 'my-0'],
        ['h-[120vw]', 'w-[80vw]', 'sm:w-[250px]', 'sm:h-[500px]'],
        ['relative', 'text-center', 'z-10'],
        ['transform', 'transition-opacity', 'transition-transform'],
        ['hover:cursor-pointer'],
        slideClassNames !== 'slide-current' && [
          'hover:opacity-80',
          'w-[250px]',
          'opacity-80',
          'scale-90',
        ]
      )}
      onClick={() => handleSlideClick(index)}
      // onMouseMove={handleMouseMove}
      // onMouseLeave={handleMouseLeave}
    >
      <div
        className={classNames([
          ['bg-color-accent', 'rounded-lg'],
          ['h-full', 'w-full'],
          ['absolute', 'top-0', 'left-0'],
          ['transform', 'transition-transform', 'overflow-auto'],
          slideClassNames !== 'slide-current' && ['top-auto bottom-2'],
        ])}>
        {/* <div
          className={classNames([
            'absolute h-full w-full z-10 opacity-80 left rounded-lg',
          ])}
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%,rgba(255, 255, 255, 0.083) 60%,#363636 100%)',
          }}></div> */}
        {/* <div className="relative overflow-scroll z-0"> */}
        <img
          className="object-fill bg-black w-full h-auto rounded-lg"
          alt={slide.name}
          src="../images/clenergy.jpg"
          onLoad={imageLoaded}
        />
        {/* </div> */}
      </div>

      <article
        className={classNames([
          'w-full',
          'opacity-0',
          'p-4',
          'text-black',
          'z-50',
          'absolute',
          'opacity-100',
          'rounded-lg',
          'bottom-0',
          'pt-10',
        ])}
        style={{
          background:
            'linear-gradient(to bottom, transparent 0%,rgba(63, 63, 63, 0.083) 30%,#363636 100%)',
        }}>
        <h3 className="text-white text-lg leading-6 font-semibold text-center w-[70%] mx-auto">
          {slide.name}
        </h3>
      </article>
    </li>
  )
}

export default Slide
