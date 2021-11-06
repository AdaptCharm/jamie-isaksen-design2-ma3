import '@assets/main.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
