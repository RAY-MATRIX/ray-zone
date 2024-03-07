import { FC } from 'react'
import Link from 'next/link'

const Logo: FC = () => {
  return (
    <Link href="/">
      <h1 className="w-[90px] h-[30px] text-3xl text-zinc-800">SWAP</h1>
      <div className="flex items-baseline gap-1.5 w-[115px] h-[18px]">
        <div className="w-[50px] h-[8px] bg-zinc-800" />
        <h2 className="text-white">TRADE</h2>
      </div>
    </Link>
  )
}

export default Logo
