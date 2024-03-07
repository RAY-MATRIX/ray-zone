import { FC, MouseEventHandler, ReactNode } from 'react'
import classNames from 'classnames'

interface Props {
  children: ReactNode
  className?: string
  variant?:
    | 'default'
    | 'link'
    | 'dark'
    | 'light'
    | 'primary'
    | 'secondary'
    | 'gray'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  size?: 'small' | 'default' | 'large' | 'medium'
  outlined?: boolean
  isLoading?: boolean
}

const Button: FC<Props> = ({
  children,
  variant = 'default',
  className = '',
  type = 'button',
  disabled = false,
  onClick = undefined,
  size = 'default',
  outlined = false,
  isLoading = false,
}) => (
  <button
    className={classNames(
      ['disabled:cursor-not-allowed'],
      {
        default: '',
        link: ['text-zinc-800', 'py-0'],
        dark: ['bg-zinc-800', 'text-white', 'border-zinc-800'],
        light: ['bg-white', 'text-zinc-800', 'border-zinc-800'],
        secondary: ['bg-cyan-200', 'text-zinc-800', 'border-cyan-200'],
        gray: ['bg-gray-100', 'text-zinc-800', 'border-gray-100'],
        primary: [
          'text-white',
          outlined ? 'bg-white' : 'bg-[#f16a70]',
          'disabled:bg-[#747373]',
          'disabled:text-white',
        ],
      }[variant],
      variant !== 'link' && [
        'rounded',
        'border',
        {
          small: ['px-1', 'py-2'],
          default: ['px-3', 'py-2'],
          medium: ['px-2', 'py-2'],
          large: ['px-6', 'py-2'],
        }[size],
      ],
      {
        small: ['text-xs'],
        default: ['text-sm'],
        medium: ['text-sm'],
        large: ['text-lg'],
      }[size],
      className
    )}
    // eslint-disable-next-line react/button-has-type
    type={type}
    onClick={onClick}
    disabled={disabled}>
    <div className="flex justify-center items-center">
      {isLoading && (
        <div className="animate-spin border-solid border-2 rounded-full w-4 h-4 border-t-yellow-400" />
      )}
      {children}
    </div>
  </button>
)

export default Button
