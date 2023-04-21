import React, { ReactNode } from 'react';
import { Link } from "gatsby";
import { WindowLocation } from "@reach/router"
import siteMetadata from "../../../gatsby-config";

type Props = {
  location: WindowLocation,
}

const Header = ({ location }: Props) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let siteName: ReactNode

  if (isRootPath) {
    siteName = <h1>{siteMetadata?.siteMetadata?.title as ReactNode}</h1>
  } else {
    siteName = (
      <Link className="header-link-home" to="/">
        {siteMetadata?.siteMetadata?.title as ReactNode}
      </Link>
    )
  }

  return (
    <header className='bg-gray-800 text-white flex justify-between item-center px-4 py-3'>
      <div className='text-x1 font-bold'>{siteName}</div>
      <nav>
        <ul className='flex space-x-4'>
          <li>
            <Link to="/blogs/">ブログ</Link>
          </li>
          <li>
            <Link to="/about/">About Me</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>)
}

export default Header;