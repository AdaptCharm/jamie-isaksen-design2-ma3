import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { HeartIcon } from '@heroicons/react/outline'

import { motion } from 'framer-motion'
import { variants } from '@config/motion'

import { ProductTypes } from '@config/products'

interface Props {
  className?: string
  product: ProductTypes
}

const ProductCard: FC<Props> = ({ className, product }) => {
  return (
    <motion.div
      variants={variants.fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className='relative group'
    >
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className='relative w-full h-56 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80'
      >
        <Image
          className='object-cover object-center w-full h-full'
          placeholder='blur'
          blurDataURL={product.image.src}
          src={product.image.src}
          alt={product.image.alt}
          layout='fill'
        />
      </motion.div>
      <h3 className='mt-4 text-sm text-gray-700'>
        <Link href={product.href} scroll={false}>
          <a>
            <span className='absolute inset-0' />
            {product.name}
          </a>
        </Link>
      </h3>
      <div className='flex items-center justify-between'>
        <div>
          <p className='mt-1 text-sm text-gray-500'>{product.color}</p>
          <p className='mt-1 text-sm font-medium text-gray-900'>
            {product.price}
          </p>
        </div>
        <div>
          <HeartIcon className='w-6 h-6 text-gray-600' />
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
