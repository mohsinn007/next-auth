import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import '../components/Navbar.css'
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider session={pageProps.session} basePath='/custom-route/api/auth'>
        <Navbar />
        <Component {...pageProps} />
      </SessionProvider>
  )

}