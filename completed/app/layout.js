import { Sacramento, Merriweather, Montserrat } from 'next/font/google'
import './globals.css'

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
  title: 'Sulagna Ghosh — Portfolio',
  description:
    'Sulagna Ghosh — Solutions Engineer at Creowis and lead organiser of React Kolkata.',
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
