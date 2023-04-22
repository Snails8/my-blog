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
      <main className="flex justify-center items-center bg-gray-600">
        <div className="bg-gray-700 w-55  mx-auto pl-1/4 pr-1/4 md:flex-col text-white font-30">
          <div className="p-32">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
