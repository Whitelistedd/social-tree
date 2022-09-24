import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import type { AppProps } from 'next/app'
import { GlobalStyle } from 'src/GlobalStyle'
import { Loading } from 'components/shared/Loading/Loading'

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true)
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <>
      {loading && <Loading />}
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
