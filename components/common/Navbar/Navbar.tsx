import { FC } from 'react'
import Link from 'next/link'

import { Popover } from '@headlessui/react'

import { MenuIcon, ShoppingBagIcon } from '@heroicons/react/outline'

import { Logo } from '@components/icons'

const navigation = {
  title: 'Design 2 MA3',
  pages: [
    { name: 'Decorations', href: '/' },
    { name: 'Vases', href: '/' },
    { name: 'Pillows', href: '/' },
    { name: 'Blankets', href: '/' },
  ],
}

const Navbar: FC = () => {
  return (
    <Popover className='fixed inset-x-0 z-50 bg-white backdrop-blur backdrop-filter bg-opacity-10'>
      {({ open }) => (
        <>
          <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 focus:outline-none'>
            <div>
              <div className='flex items-center justify-between h-16'>
                {/* Left nav */}
                <div className='lg:flex-1 lg:flex lg:items-center'>
                  <Link href='/'>
                    <a className='flex items-center transition-opacity duration-200 ease-in-out gap-x-2 hover:opacity-40'>
                      <Logo className='w-6 h-6 text-black' />
                      <span className='text-sm font-semibold text-black'>
                        {navigation.title}
                      </span>
                    </a>
                  </Link>
                </div>

                {/* Center nav */}
                <div className='hidden lg:flex lg:space-x-8'>
                  {navigation.pages.map((page) => (
                    <Link href={page.href} key={page.name}>
                      <a className='flex items-center text-sm font-semibold text-black transition-opacity duration-200 ease-in-out hover:opacity-40'>
                        {page.name}
                      </a>
                    </Link>
                  ))}
                </div>

                {/* Right nav */}
                <div className='flex justify-end flex-1'>
                  <div className='flex items-center space-x-8'>
                    <Link href='/'>
                      <a className='hidden text-sm font-semibold text-black transition-opacity duration-200 ease-in-out hover:opacity-40 lg:block'>
                        Sign in
                      </a>
                    </Link>

                    <Link href='/'>
                      <a className='hidden text-sm font-semibold text-black transition-opacity duration-200 ease-in-out hover:opacity-40 lg:block'>
                        Create an account
                      </a>
                    </Link>

                    {/* Cart */}
                    <div className='flow-root'>
                      <Link href='/'>
                        <a className='flex items-center px-3 py-1.5 -m-2 bg-black rounded-full bg-opacity-5 hover:bg-opacity-10'>
                          <ShoppingBagIcon
                            className='flex-shrink-0 w-6 h-6 text-black'
                            aria-hidden='true'
                          />
                          <span className='ml-2 text-sm font-semibold text-black'>
                            0
                          </span>
                          <span className='sr-only'>
                            items in cart, view bag
                          </span>
                        </a>
                      </Link>
                    </div>

                    {/* Mobile menu */}
                    <div className='flex items-center flex-1 lg:hidden'>
                      <Popover.Button className='px-2 py-1.5 -ml-2 text-black bg-black rounded-full bg-opacity-5 hover:bg-opacity-10'>
                        <span className='sr-only'>Open menu</span>
                        <MenuIcon className='w-6 h-6' aria-hidden='true' />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Popover>
  )
}

export default Navbar
