import { FC } from 'react'
import { SlideProp } from '../Slide/Slide'
import Link from '@/components/Link'
interface Props {
  currentSlide: SlideProp
}
const SlideContent: FC<Props> = ({ currentSlide }) => {
  return (
    <div>
      <h3 className="pb-6 text-2xl font-bold">{currentSlide.name}</h3>
      <div className="mb-5 sm:mb-10">
        <p>Website development</p>
        <p>Tech stacks:Wordpress</p>
      </div>

      <Link
        href={currentSlide.url}
        title={currentSlide.name}
        variant="button"
        target="_blank"
        className="flex justify-between w-[150px] items-center font-semibold hover:text-zinc-700 mb-10">
        Explore
        <svg
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="h-7">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"></path>
        </svg>
      </Link>
    </div>
  )
}
export default SlideContent
