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
      <main className="flex justify-center items-center bg-gray-600 min-h-screen" style={{ minHeight: "calc(100vh - 4rem)" }}>
        <div className="flex-grow  bg-gray-700 md:flex-col w-full md:max-w-[1000px]">
          <div className="px-32 py-40">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
