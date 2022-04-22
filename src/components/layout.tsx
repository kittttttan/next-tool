import Head from 'next/head'
import Header from 'components/header'
import Footer from 'components/footer'
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
                <title>Tools</title>
            </Head>

            <div className="container">
                <Header />
                <main>{children}</main>
                <Footer />
            </div>
        </>
    )
}
