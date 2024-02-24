import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import type { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_URL ?? '';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Tools',
  description: 'tools',
  icons: {
    icon: 'https://assets.kittttttan.info/img/favicon.ico',
    apple: 'https://assets.kittttttan.info/img/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
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
