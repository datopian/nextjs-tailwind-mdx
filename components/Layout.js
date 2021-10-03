import Link from 'next/link'
import Head from 'next/head'

import Nav from './Nav'

export default function Layout({ children, title='' }) {
  return (
    <>
      <Head>
        <title>{title}{title && '- '}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <main>
        {children}
      </main>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://datopian.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="https://playbook.datopian.com/img/datopian-dark-logotype.svg" alt="Datopian Logo" className="h-12 block" />
        </a>
      </footer>
    </>
  )
}
