'use client'
import { GlobalHeader } from './GlobalHeader';
import Meta from '../meta'
import { GlobalFooter } from './GlobalFooter';

type Props = {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-80vh">
        <GlobalHeader />
        <main>{children}</main>
      </div>
      <GlobalFooter />
    </>
  )
}

export default GlobalLayout
