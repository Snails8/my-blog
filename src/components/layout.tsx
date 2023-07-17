import GlobalHeader from './organisms/GlobalHeader';
import Footer from './footer'
import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <GlobalHeader />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
