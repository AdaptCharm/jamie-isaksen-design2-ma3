import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'

import type { ProductTypes } from '@lib/data/types'

interface Props {
  product: ProductTypes
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className="relative group">
      <div className="relative w-full h-56 overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
        <Image
          className="object-cover object-center w-full h-full"
          placeholder="blur"
          blurDataURL={product.image.src}
          src={product.image.src}
          alt={product.image.alt}
          layout="fill"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        <Link href={product.href} scroll={false}>
          <a>
            <span className="absolute inset-0" />
            {product.name}
          </a>
        </Link>
      </h3>
      <div className="flex items-center justify-between">
        <div>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          <p className="mt-1 text-sm font-medium text-gray-900">
            {product.price}
          </p>
        </div>
        <div>
          <HeartIcon className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  )
}

export default ProductCard
