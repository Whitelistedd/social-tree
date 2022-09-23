import type { AppProps } from 'next/app'
import LayoutWrapper from 'layout/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  )
}

export default MyApp
