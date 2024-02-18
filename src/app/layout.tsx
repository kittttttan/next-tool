import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
  description: 'tools',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://tool.kittttttan.info',
    title: 'Tools',
    siteName: 'Tools',
  },
  twitter: {
    card: 'summary',
    site: '@ktn111',
    creator: '@kittttttan',
  },
  formatDetection: {
    telephone: false,
  }
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
