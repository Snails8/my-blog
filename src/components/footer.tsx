import * as React from "react"
import { ReactNode } from "react"
import siteMetadata from "../../gatsby-config"

const Footer = () => {
  return (
    <footer>
      <p>
        © {new Date().getFullYear()}, Built with
        { ` `+ siteMetadata.siteMetadata?.title as ReactNode}
      </p>
    </footer>
  )
}
export default Footer;