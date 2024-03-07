import classNames from 'classnames'
import { FC } from 'react'
interface Props {
  type: 'previous' | 'next'
  title: string
  handleClick: () => void
}

const SliderControl: FC<Props> = ({ type, title, handleClick }) => {
  return (
    <button
      className={classNames(
        ['flex', 'align-center', 'text-white'],
        ['p-1 bg-yellow-400 rounded-full opacity-70'],
        ['focus:opacity-100 hover:opacity-100 hover:text-zinc-700'],
        ['h-10 w-10 sm:h-12 sm:w-12']
      )}
      title={title}
      onClick={handleClick}>
      <svg
        className={classNames(['scale-50'], type === 'next' && ['rotate-180'])}
        data-slot="icon"
        fill="none"
        stroke-width="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"></path>
      </svg>
    </button>
  )
}

export default SliderControl
