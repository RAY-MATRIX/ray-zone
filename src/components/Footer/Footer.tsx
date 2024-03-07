import { FC } from 'react'
import Link from '../Link'
import classNames from 'classnames'
interface Props {
  variant?: 'default' | 'game'
}
const Footer: FC<Props> = ({ variant = 'default' }) => {
  const year = new Date().getFullYear()
  return (
    <div
      className={classNames(
        ['text-center py-2 flex mx-auto'],
        {
          default: ['justify-between', 'items-center'],
          game: ['text-white', 'justify-center', 'gap-5'],
        }[variant]
      )}>
      <div>
        Copyright{' '}
        <Link href="/game" title="game page">
          ©
        </Link>{' '}
        {year}
      </div>
      {variant === 'game' && <span>|</span>}
      <div className="">
        Designed By{' '}
        <Link href="/" title="home page">
          Ray
        </Link>
      </div>
    </div>
  )
}
export default Footer
