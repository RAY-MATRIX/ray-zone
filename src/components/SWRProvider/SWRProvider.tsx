'use client'

import { FC, ReactNode } from 'react'
import { SWRConfig, SWRConfiguration } from 'swr'

interface Props {
  children: ReactNode
  value?: SWRConfiguration
}

const SWRProvider: FC<Props> = ({ children, value = undefined }) => (
  <SWRConfig value={value}>{children}</SWRConfig>
)

export default SWRProvider
