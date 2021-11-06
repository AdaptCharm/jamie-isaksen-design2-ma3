// Products.
export type ProductTypes = {
  id: number
  category: string
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

// Sort options & filters.
export type SortOptionTypes = {
  name: string
  href: string
}

export type FilterTypes = {
  id: string
  name: string
  options: {
    value: string
    label: string
  }[]
  open: boolean
}
