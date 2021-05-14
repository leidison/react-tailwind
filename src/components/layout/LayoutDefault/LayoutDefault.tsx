import { FC } from 'react'
import TopBar from '@components/layout/TopBar/TopBar'

const LayoutDefault: FC<{ children: any }> = ({ children }) => {
  return <main>

    <TopBar />

    {children}

  </main>
}

export const getLayout = (page: FC) => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default LayoutDefault
