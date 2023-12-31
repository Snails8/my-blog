import type { Metadata } from "next"
// These styles apply to every route in the application
import './globals.css'
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: "400",
  subsets: ["latin"],
})


const metadata: Metadata = {
  title: 'my blog',
  description: 'my blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={notoSansJP.className}>
        {children}
      </body>
    </html>
  )
}
