import * as React from "react"
import { WindowLocation } from "@reach/router"
import Header from "../organisms/GlobalHeader";
import Footer from "../organisms/GlobalFooter";

type Props = Readonly<{
  location: WindowLocation;
  title: string;
  children?: React.ReactNode
}>

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div data-is-root-path={isRootPath}>
      <Header location={location} />
      <main className="flex justify-center items-center w-50  mx-auto pl-1/4 pr-1/4 md:flex-col">
        <div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
