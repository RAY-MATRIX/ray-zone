import { FC, ReactNode } from 'react'
import classNames from 'classnames'

interface Props {
  variant: 'front' | 'back'
  children?: ReactNode
}

const CardFace: FC<Props> = ({ variant, children }) => {
  return (
    <div
      className={classNames(
        [
          'w-full',
          'h-full',
          'p-2',
          'rounded',
          'absolute',
          'bg-origin-content',
          'bg-no-repeat',
          'bg-[#f16a70]',
        ],
        {
          front: ['bg-[url("/images/wish.png")]', 'bg-center'],
          back: [
            'flex',
            'flex-col',
            'justify-center',
            'align-center',
            'rotate-y-180',
            'text-white',
          ],
        }[variant]
      )}
      style={{
        backfaceVisibility: 'hidden',
      }}>
      {children}
    </div>
  )
}
export default CardFace
