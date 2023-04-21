import React, { ReactNode } from 'react';
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router"
import siteMetadata from "../../gatsby-config";

type Props = {
  location: WindowLocation,
}

const Header = ({ location }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header: ReactNode

  if (isRootPath) {
    header = <h1>{siteMetadata?.siteMetadata?.title as ReactNode}</h1>
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {siteMetadata?.siteMetadata?.title as ReactNode}
      </Link>
    )
  }

  return <header>{header}</header>
}

export default Header;