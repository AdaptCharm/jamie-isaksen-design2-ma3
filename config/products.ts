export type CategoryTypes = 'decorations' | 'vases' | 'custom'

export type ProductTypes = {
  id: number
  category: CategoryTypes
  name: string
  description: string
  color: string
  price: string
  href: string
  image: {
    src: string
    alt: string
  }
}

export const products: ProductTypes[] = [
  {
    id: 1,
    category: 'decorations',
    name: 'Bali stone decorations',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$25',
    href: '#',
    image: {
      src: '/products/decorations/bali-stone-decorations.png',
      alt: 'Bali stone decorations',
    },
  },
  {
    id: 2,
    category: 'decorations',
    name: 'Buddha status with incense and candle',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$75',
    href: '#',
    image: {
      src: '/products/decorations/buddha-statue-with-incense-and-candle.jpg',
      alt: 'Buddha status with incense and candle',
    },
  },
  {
    id: 3,
    category: 'decorations',
    name: 'Handmade macrame sign',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$25',
    href: '#',
    image: {
      src: '/products/decorations/handmade-macrame-sign.jpg',
      alt: 'Handmade macrame sign',
    },
  },
  {
    id: 4,
    category: 'decorations',
    name: 'Live laugh surf sign',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$50',
    href: '#',
    image: {
      src: '/products/decorations/live-laugh-surf-sign.jpg',
      alt: 'Live laugh surf sign',
    },
  },
  {
    id: 5,
    category: 'vases',
    name: 'Green foliage with wooden vases',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$75',
    href: '#',
    image: {
      src: '/products/vases/green-foliage-with-wooden-vases.jpg',
      alt: 'Green foliage with wooden vases',
    },
  },
  {
    id: 6,
    category: 'vases',
    name: 'Purple foliage with ceramic vase',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$100',
    href: '#',
    image: {
      src: '/products/vases/purple-foliage-with-ceramic-vase.png',
      alt: 'Purple foliage with ceramic vase',
    },
  },
  {
    id: 7,
    category: 'vases',
    name: 'Clear glass vase with a wooden cup of tea',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$50',
    href: '#',
    image: {
      src: '/products/vases/clear-glass-vase-with-a-wooden-cup-of-tea.png',
      alt: 'Clear glass vase with a wooden cup of tea',
    },
  },
  {
    id: 8,
    category: 'vases',
    name: 'Glass vase with green leafs',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$25',
    href: '#',
    image: {
      src: '/products/vases/glass-vase-with-green-leafs.png',
      alt: 'Glass vase with green leafs',
    },
  },
  {
    id: 9,
    category: 'custom',
    name: 'Black crow',
    description: 'Pariatur pariatur non fugiat',
    color: 'Black',
    price: '$25',
    href: '#',
    image: {
      src: '/products/decorations/black-crow.png',
      alt: 'Black crow',
    },
  },
  {
    id: 10,
    category: 'custom',
    name: 'Exotic stones',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$50',
    href: '#',
    image: {
      src: '/products/decorations/exotic-stones.png',
      alt: 'Exotic stones',
    },
  },
  {
    id: 11,
    category: 'custom',
    name: 'Mix of decorations',
    description: 'Pariatur pariatur non fugiat',
    color: 'Natural',
    price: '$75',
    href: '#',
    image: {
      src: '/products/decorations/mix-of-decorations.png',
      alt: 'Mix of decorations',
    },
  },
]

export type FeaturedCollectionTypes = {
  id: number
  name: string
  description: string
  href: string
  image: {
    src: string
    alt: string
  }
}

export const featuredCollections: FeaturedCollectionTypes[] = [
  {
    id: 1,
    name: 'Rugs Collection',
    description:
      'Velit incididunt commodo ut ut aute nostrud cillum veniam ipsum amet',
    href: '#',
    image: {
      src: '/collections/rugs-collection.png',
      alt: 'Rugs collection',
    },
  },
  {
    id: 2,
    name: 'Mirrors Collection',
    description:
      'Nulla veniam deserunt sint culpa occaecat ullamco ullamco pariatur incididunt veniam',
    href: '#',
    image: {
      src: '/collections/mirrors-collection.png',
      alt: 'Mirrors collection',
    },
  },
]
