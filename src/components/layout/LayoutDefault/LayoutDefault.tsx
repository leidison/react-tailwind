import { FC } from 'react'

const LayoutDefault: FC<{ children: any }> = ({ children }) => {
  return <>{children}</>
}

export const getLayout = (page: FC) => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default LayoutDefault
