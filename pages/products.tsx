import { Fragment, useState } from 'react'
import Image from 'next/image'
import { Menu, Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import cn from 'classnames'

import { filtersData, sortOptionsData } from '@config/filters'
import { featuredCollections, products } from '@config/products'

import { filterByValue } from '@lib/collections'

import { Layout } from '@components/common'
import { Element, Container } from '@components/ui'
import { ProductCard, ProductFeaturedCard } from '@components/product'

const Products = () => {
  //Filters.
  const [sortOptions, setSortOptions] = useState(sortOptionsData)
  const [filters, setFilters] = useState(filtersData)

  //Collections.
  const rugs = filterByValue(featuredCollections, 1)
  const mirrors = filterByValue(featuredCollections, 2)

  //Products.
  const decorations = filterByValue(products, 'custom')
  const vases = filterByValue(products, 'vases')

  return (
    <>
      {/* Hero */}
      <Element className='py-32 text-center'>
        <div className='flex-shrink-0 overflow-hidden' aria-hidden='true'>
          <Image
            className='w-full h-full'
            objectFit='cover'
            objectPosition='center'
            placeholder='blur'
            blurDataURL='/hero/hero-2.jpg'
            src='/hero/hero-2.jpg'
            alt='Hero 1.'
            layout='fill'
          />
        </div>
        <div className='absolute inset-0 bg-white bg-opacity-90 backdrop-filter backdrop-contrast-125' />
        <Container className='relative'>
          <h1 className='text-4xl font-extrabold tracking-tight text-black'>
            Products
          </h1>
          <p className='mt-4 text-base text-black'>
            Commodo commodo esse ipsum irure labore velit laborum adipisicing.
          </p>
        </Container>
      </Element>

      {/* Filters */}
      <Element
        type='section'
        label='Filter'
        className='pt-6 border-t border-gray-200'
      >
        <Container>
          <div className='flex items-center justify-between'>
            <Menu as='div' className='relative z-10 inline-block text-left'>
              <div>
                <Menu.Button className='inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900'>
                  Sort
                  <ChevronDownIcon
                    className='flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500'
                    aria-hidden='true'
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter='transition ease-out duration-100'
                enterFrom='transform opacity-0 scale-95'
                enterTo='transform opacity-100 scale-100'
                leave='transition ease-in duration-75'
                leaveFrom='transform opacity-100 scale-100'
                leaveTo='transform opacity-0 scale-95'
              >
                <Menu.Items className='absolute left-0 z-10 w-40 mt-2 origin-top-left bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='py-1'>
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={cn(
                              'block px-4 py-2 text-sm font-medium text-gray-900',
                              {
                                'bg-gray-100': active,
                              }
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type='button'
              className='inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden'
            >
              Filters
            </button>

            <Popover.Group className='hidden sm:flex sm:items-baseline sm:space-x-8'>
              {filters.map((section, sectionIdx) => (
                <Popover
                  as='div'
                  key={section.name}
                  id='menu'
                  className='relative z-10 inline-block text-left'
                >
                  <div>
                    <Popover.Button className='inline-flex items-center justify-center text-sm font-medium text-gray-700 group hover:text-gray-900'>
                      <span>{section.name}</span>
                      {sectionIdx === 0 ? (
                        <span className='ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums'>
                          1
                        </span>
                      ) : null}
                      <ChevronDownIcon
                        className='flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                    </Popover.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Popover.Panel className='absolute right-0 p-4 mt-2 origin-top-right bg-white rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <form className='space-y-4'>
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className='flex items-center'>
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={section.id}
                              defaultValue={option.value}
                              defaultChecked={false}
                              type='checkbox'
                              className='w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500'
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className='pr-6 ml-3 text-sm font-medium text-gray-900 whitespace-nowrap'
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </form>
                    </Popover.Panel>
                  </Transition>
                </Popover>
              ))}
            </Popover.Group>
          </div>
        </Container>
      </Element>

      {/* Product grid filtered by decorations category */}
      <Element type='section' label='Products' className='mt-8'>
        <Container>
          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 md:gap-x-8'>
            {decorations.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </Container>
      </Element>

      {/* Featured collection card filtered by first result */}
      <Element type='section' label='Featured collection' className='mt-16'>
        <Container>
          {rugs.map((collection) => (
            <ProductFeaturedCard product={collection} key={collection.id} />
          ))}
        </Container>
      </Element>

      {/* Product grid filtered by vases category */}
      <Element type='section' label='More products' className='mt-16'>
        <Container>
          <div className='grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-4 md:gap-x-8'>
            {vases.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </Container>
      </Element>

      {/* Featured collection card filtered by mirrors collection */}
      <Element
        type='section'
        label='Popular collection'
        className='pb-24 mt-16'
      >
        <Container>
          {mirrors.map((collection) => (
            <ProductFeaturedCard product={collection} key={collection.id} />
          ))}
        </Container>
      </Element>
    </>
  )
}

export default Products

Products.Layout = Layout
