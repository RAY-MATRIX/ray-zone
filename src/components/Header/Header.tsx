'use client'

import { FC } from 'react'
import Link from '@/components/Link'
import classNames from 'classnames'
interface Props {
  size: 'default' | 'small'
}
const Header: FC<Props> = ({ size }) => {
  return (
    <div
      className={classNames(
        ['flex', 'justify-center', 'items-center'],
        { default: ['py-5'], small: ['py-2'] }[size]
      )}>
      <div className="flex max-w-[1280px] justify-between px-0 w-full">
        <Link href="/" title="homepage">
          RayZone
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/projects" title="projects page">
            Projects
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
