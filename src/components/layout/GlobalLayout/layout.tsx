'use client'
import { GlobalHeader } from './GlobalHeader';
import Meta from '../meta'
import { GlobalFooter } from './GlobalFooter';
import { usePathname } from 'next/navigation';
import { ArticleHeader } from './ArticleHeader';

type Props = {
  children: React.ReactNode
}

const GlobalLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const doShowArticleHeader = (pathname) => {
    const regex = /^\/posts\/[^/]+$/;
    return regex.test(pathname);
  };
  

  return (
    <>
      <Meta />
      <div className="min-h-80vh">
        { !doShowArticleHeader(pathname) ? 
          <GlobalHeader /> : 
          <ArticleHeader />
        }
        <main>{children}</main>
      </div>
      <GlobalFooter />
    </>
  )
}

export default GlobalLayout