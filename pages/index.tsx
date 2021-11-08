import Image from 'next/image'
import {
  ShieldCheckIcon,
  TruckIcon,
  SparklesIcon,
} from '@heroicons/react/outline'

import { products } from '@lib/data/collections'

import { filterByValue } from '@lib/collections'

import { ProductCard } from '@components/product'

import { Container, Element, Text, Button, Link } from '@components/ui'

import Page from '@components/Page'

const incentives = [
  {
    name: 'Free shipping',
    icon: TruckIcon,
    description: 'We cover the costs of shipping throughout the country.',
  },
  {
    name: '10-year warranty',
    icon: ShieldCheckIcon,
    description:
      'We offer a 10-year warranty so that you as a customer are satisfied.',
  },
  {
    name: '24/7 customer support',
    icon: SparklesIcon,
    description:
      'We provide a 24-hour customer service to answer any inquiries.',
  },
]

export default function Home() {
  //Products.
  const decorations = filterByValue(products, 'decorations')
  const vases = filterByValue(products, 'vases')

  return (
    <Page>
      {/* Hero section */}
      <Element type="section">
        {/* Fluid image */}
        <div className="relative" aria-hidden="true">
          <div className="lg:hidden">
            <Image
              width="750"
              height="750"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/hero/hero-sm.jpeg"
              src="/hero/hero-sm.jpeg"
              alt="Hero image"
              layout="responsive"
            />
          </div>

          <div className="hidden lg:block">
            <Image
              width="1920"
              height="692"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/hero/hero-md.jpeg"
              src="/hero/hero-md.jpeg"
              alt="Hero image"
              layout="responsive"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <Container className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-6xl">
              <span className="block text-white">Christmas is coming</span>
            </h1>
            <p className="max-w-3xl mt-6 text-xl text-white">
              Free shipping on all home decorations.
            </p>
            <Link href="/products">
              <a className="inline-block px-8 py-3 mt-8 text-base font-semibold text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50">
                View Products
              </a>
            </Link>
          </Container>
        </div>
      </Element>

      {/* New arrivals */}
      <Element type="section" className="py-24">
        <Container>
          <div className="md:flex md:items-center md:justify-between">
            <Text variant="h2">New Arrivals</Text>
            <div className="hidden md:block">
              <Button>Shop the collection &rarr;</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {decorations.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="mt-8 text-sm md:hidden">
            <Button>Shop the collection &rarr;</Button>
          </div>
        </Container>
      </Element>

      {/* Featured products */}
      <Element type="section" className="py-24">
        <Container>
          <div className="md:flex md:items-center md:justify-between">
            <Text variant="h2">Featured Products</Text>
            <div className="hidden md:block">
              <Button>Shop the collection &rarr;</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-6 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
            {vases.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
          <div className="mt-8 text-sm md:hidden">
            <Button>Shop the collection &rarr;</Button>
          </div>
        </Container>
      </Element>

      {/* Featured section */}
      <section aria-labelledby="comfort-heading">
        <div className="relative bg-gradient-to-r from-cyan-400 to-teal-200">
          <div className="relative px-6 py-32 sm:py-40 sm:px-12 lg:px-16">
            <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
              <h2
                id="comfort-heading"
                className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl"
              >
                100% Customer Satisfaction
              </h2>
              <p className="mt-3 text-xl text-black">
                We strive to make you as a customer happy. That is why we offer
                a 100% satisfaction guarantee. If you are not satisfied with the
                product you have received, then you do not have to pay for the
                product.
              </p>
              <Link href="/" scroll={false}>
                <a className="inline-flex px-8 py-3 mt-8 text-base font-medium text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50 sm:w-auto">
                  Read more
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <div className="bg-white">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="px-6 py-16 bg-gray-50 rounded-2xl sm:p-16">
            <div className="max-w-xl mx-auto lg:max-w-none">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                  We built our business on customer service
                </h2>
              </div>
              <div className="grid max-w-sm grid-cols-1 mx-auto mt-12 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3">
                {incentives.map((incentive) => (
                  <div
                    key={incentive.name}
                    className="text-center sm:flex sm:text-left lg:block lg:text-center"
                  >
                    <span className="inline-flex items-center justify-center p-3 rounded-md shadow-lg bg-gradient-to-r from-teal-200 to-cyan-400">
                      <incentive.icon
                        className="w-6 h-6 text-black"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                      <h3 className="text-sm font-medium text-gray-900">
                        {incentive.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">
                        {incentive.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter section */}
      <div className="bg-white">
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden rounded-3xl sm:py-16 sm:px-12 lg:p-20">
            <div className="flex-shrink-0">
              <Image
                className="object-cover object-center w-full h-full"
                placeholder="blur"
                blurDataURL="/gradients/gradient-2.jpg"
                src="/gradients/gradient-2.jpg"
                alt="Gradient 2."
                layout="fill"
              />
            </div>
            <div className="relative lg:flex lg:items-center">
              <div className="lg:w-0 lg:flex-1">
                <h2 className="text-3xl font-extrabold tracking-tight text-black">
                  Sign up for our newsletter
                </h2>
                <p className="max-w-3xl mt-4 text-lg text-black">
                  Be the first to know about new products.
                </p>
              </div>
              <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form className="sm:flex">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    name="email-address"
                    type="email"
                    autoComplete="new-email"
                    required
                    className="w-full px-5 py-3 text-black placeholder-gray-500 transition-colors duration-200 border-white rounded-md focus:outline-none focus:ring-0 focus:border-teal-200 focus:border-opacity-90"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-black bg-white border border-transparent rounded-md bg-opacity-30 hover:bg-opacity-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  >
                    Notify me
                  </button>
                </form>
                <p className="mt-3 text-sm text-black">
                  We care about the protection of your data. Read our{' '}
                  <Link href="/" scroll={false}>
                    <a className="font-medium text-black underline">
                      Privacy Policy.
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  )
}
