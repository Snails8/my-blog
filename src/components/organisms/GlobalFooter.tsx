import * as React from "react"
import { ReactNode } from "react"
import siteMetadata from "../../../gatsby-config"

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()}, Built with {` `}
          <a href="#" className="hover:text-white">{siteMetadata.siteMetadata?.title as ReactNode}</a>
        </p>
      </div>
    </footer>
  )
}
export default Footer;