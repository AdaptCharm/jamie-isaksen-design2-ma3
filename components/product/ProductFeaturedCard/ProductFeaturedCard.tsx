import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

import { variants } from '@config/motion'
import { FeaturedCollectionTypes } from '@config/products'

interface Props {
  className?: string
  product: FeaturedCollectionTypes
}

const ProductFeaturedCard: FC<Props> = ({ className, product }) => {
  return (
    <div className='relative overflow-hidden rounded-lg lg:h-96'>
      <div className='absolute inset-0'>
        <Image
          src={product.image.src}
          alt={product.image.alt}
          className='object-cover object-center w-full h-full'
          layout='fill'
        />
      </div>
      <div className='absolute inset-x-0 h-full backdrop-filter backdrop-blur-sm' />
      <div aria-hidden='true' className='relative w-full h-96 lg:hidden' />
      <div aria-hidden='true' className='relative w-full h-32 lg:hidden' />
      <div className='absolute inset-x-0 bottom-0 p-6 bg-black bg-opacity-75 rounded-bl-lg rounded-br-lg backdrop-filter backdrop-blur sm:flex sm:items-center sm:justify-between lg:inset-y-0 lg:inset-x-auto lg:w-96 lg:rounded-tl-lg lg:rounded-br-none lg:flex-col lg:items-start'>
        <div>
          <h2 id='featured-heading' className='text-xl font-bold text-white'>
            {product.name}
          </h2>
          <p className='mt-1 text-sm text-gray-300'>{product.description}.</p>
        </div>
        <Link href={product.href}>
          <a className='flex items-center justify-center flex-shrink-0 px-4 py-3 mt-6 text-base font-medium text-white bg-white bg-opacity-0 border border-white border-opacity-25 rounded-md hover:bg-opacity-10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full'>
            View the collection
          </a>
        </Link>
      </div>
    </div>
  )
}

export default ProductFeaturedCard
