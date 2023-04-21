import * as React from "react"
import { WindowLocation } from "@reach/router"
import Header from "./header";
import Footer from "./footer";

type Props = Readonly<{
  location: WindowLocation;
  title: string;
  children?: React.ReactNode
}>

const Layout = ({ location, title, children }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Header location={location} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
