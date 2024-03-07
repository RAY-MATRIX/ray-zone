import { FC } from 'react'
import { SlideProp } from '../Slider/components/Slide/Slide'
import classNames from 'classnames'

interface Props {
  list: SlideProp[]
  setLayout: () => void
  setCurrent: (item: number) => void
}

const Grid: FC<Props> = ({ list, setLayout, setCurrent }) => {
  return (
    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5 sm:gap-3">
      {list.map((slide, index) => (
        <li
          key={slide.id}
          className={classNames(
            ['group h-[200px] w-auto relative border-1 overflow-hidden'],
            ['rounded-md flex justify-center flex-col align-center'],
            ['hover:opacity-100 opacity-70 hover:cursor-pointer']
          )}
          onClick={() => {
            setLayout()
            setCurrent(index)
          }}>
          <img
            src={slide.src}
            alt={slide.name}
            className="h-full w-full bg-slate-100"
          />
          <h4
            className={classNames(
              ['text-center p-5 max-w-[200px]'],
              ['mx-auto absolute z-10 left-1/2 translate-x-[-50%] invisible '],
              ['group-hover:visible']
            )}>
            {slide.name}
          </h4>
        </li>
      ))}
    </ul>
  )
}

export default Grid
