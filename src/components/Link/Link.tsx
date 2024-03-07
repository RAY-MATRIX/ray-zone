import classNames from 'classnames'
import { FC, ReactNode } from 'react'
import NextLink, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: ReactNode
  href: string
  variant?: 'default' | 'primary' | 'button'
  className?: string
  title: string
  target?: '_blank' | '_self'
}

const Link: FC<Props> = ({
  children,
  href,
  variant = 'default',
  className = '',
  title,
  target = '_self',
}) => (
  <NextLink
    href={href}
    className={classNames(
      {
        default: '',
        primary: ['text-yellow-800', 'underline', 'underline-offset-4'],
        button: ['rounded', 'px-3', 'py-2', 'bg-yellow-400', 'text-white'],
      }[variant],
      className
    )}
    title={title}
    target={target}>
    {children}
  </NextLink>
)

export default Link
