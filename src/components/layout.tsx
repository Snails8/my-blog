import GlobalHeader from './organisms/GlobalHeader';
import Footer from './organisms/unuse-default-component/footer'
import Meta from './meta'
import { GlobalFooter } from './organisms/GlobalFooter';

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
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

export default Layout
