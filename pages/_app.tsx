import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { RouterGuard } from '../components/RouterGuard'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RouterGuard>
        <Component {...pageProps} />
      </RouterGuard>
    </>
  )
}

export default MyApp
