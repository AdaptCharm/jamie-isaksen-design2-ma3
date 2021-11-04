import { FC } from 'react'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { Navbar, Footer } from '@components/common'

const Layout: FC = ({ children }) => {
  const { pathname } = useRouter()

  return (
    <>
      <Navbar />
      <main
        className={cn({
          'pt-16': pathname !== '/',
        })}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
