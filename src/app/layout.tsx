import './globals.css'
import Header from '../components/header'
import Footer from '../components/footer'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tools',
  icons: {
    icon: '/favicon.ico'
  },
  viewport: 'width=device-width, initial-scale=1.0',
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
