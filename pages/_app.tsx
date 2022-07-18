import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { RouterGuard } from '../components/RouterGuard'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RouterGuard>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </RouterGuard>
    </>
  )
}

export default MyApp
