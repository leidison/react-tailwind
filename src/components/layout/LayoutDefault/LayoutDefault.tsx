import { FC } from 'react'

const LayoutDefault: FC<{ children: any }> = ({ children }) => {
  return <main>{children}</main>
}

export const getLayout = (page: FC) => {
  return <LayoutDefault>{page}</LayoutDefault>
}

export default LayoutDefault
