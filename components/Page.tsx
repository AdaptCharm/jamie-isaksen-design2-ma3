import type { FC, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import cn from 'clsx'
import { Navbar, Footer } from '@components/common'

import { siteConfig } from '@config/constants'
import type { MetaProps } from '@config/types'

interface PageProps extends MetaProps {
  className?: string
  children: ReactNode
}

export const Page: FC<PageProps> = ({ className, children, ...newProps }) => {
  const { pathname, asPath } = useRouter()
  const isHome = pathname === '/'

  const { meta: props, site } = siteConfig
  const meta = Object.assign({}, props, { ...newProps })

  return (
    <>
      <Head>
        <title>{`${meta.title} | ${site.name}`}</title>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:url" content={`${site.url}${asPath}`} />
        <link rel="canonical" href={`${site.url}${asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@leeerob" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <Navbar />
      <main
        className={cn(
          {
            'pt-16': !isHome,
          },
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Page
