import type {
  ProductTypes,
  FeaturedCollectionTypes,
  SortOptionTypes,
  FilterTypes,
} from './types'

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
      src: '/products/decorations/bali-stone-decorations.jpg',
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
      src: '/products/vases/purple-foliage-with-ceramic-vase.jpg',
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
      src: '/products/vases/clear-glass-vase-with-a-wooden-cup-of-tea.jpg',
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
      src: '/products/vases/glass-vase-with-green-leafs.jpg',
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
      src: '/products/decorations/black-crow.jpg',
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
      src: '/products/decorations/exotic-stones.jpg',
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
      src: '/products/decorations/mix-of-decorations.jpg',
      alt: 'Mix of decorations',
    },
  },
]

export const featuredCollections: FeaturedCollectionTypes[] = [
  {
    id: 1,
    name: 'Rugs Collection',
    description: 'A beautiful collection of exclusive rugs',
    href: '#',
    image: {
      src: '/collections/rugs-collection.jpg',
      alt: 'Rugs collection',
    },
  },
  {
    id: 2,
    name: 'Mirrors Collection',
    description: 'A beautiful collection of modern mirrors',
    href: '#',
    image: {
      src: '/collections/mirrors-collection.jpg',
      alt: 'Mirrors collection',
    },
  },
]

export const sortOptionsData: SortOptionTypes[] = [
  { name: 'Most Popular', href: '#' },
  { name: 'Best Rating', href: '#' },
  { name: 'Newest', href: '#' },
  { name: 'Price: Low to High', href: '#' },
  { name: 'Price: High to Low', href: '#' },
]

export const filtersData: FilterTypes[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'decorations', label: 'Decorations' },
      { value: 'vases', label: 'Vases' },
      { value: 'pillows', label: 'Pillows' },
      { value: 'rugs', label: 'Rugs' },
      { value: 'mirrors', label: 'Mirrors' },
      { value: 'candles', label: 'Candles' },
    ],
    open: false,
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'decor-company', label: 'Decor Company' },
      { value: 'interior-ltd', label: 'Interior Ltd.' },
      { value: 'decorating-inc', label: 'Decorating Inc.' },
    ],
    open: false,
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'natural', label: 'Natural' },
      { value: 'black', label: 'Black' },
      { value: 'white', label: 'White' },
      { value: 'grey', label: 'Grey' },
      { value: 'brown', label: 'Brown' },
      { value: 'green', label: 'Green' },
    ],
    open: false,
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
      { value: '2xl', label: '2XL' },
    ],
    open: false,
  },
]
