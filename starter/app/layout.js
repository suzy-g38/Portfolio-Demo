import { Sacramento, Merriweather, Montserrat } from 'next/font/google'
import './globals.css'

// TODO (bonus): this is next/font/google — Next.js downloads and
// self-hosts these fonts at build time instead of requesting them
// from Google at runtime like Stages 1 & 2 did with a <link> tag.
// Nothing to do here, just notice the difference.
const sacramento = Sacramento({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sacramento',
})

const merriweather = Merriweather({
  weight: '300',
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio site built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sacramento.variable} ${merriweather.variable} ${montserrat.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
