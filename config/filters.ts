export type FilterTypes = {
  id: string
  name: string
  options: {
    value: string
    label: string
  }[]
}

export const filtersData: FilterTypes[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'lorem', label: 'Lorem' },
      { value: 'ipsum', label: 'Ipsum' },
      { value: 'dolor', label: 'Dolor' },
      { value: 'sit', label: 'Sit' },
      { value: 'amet', label: 'Amet' },
      { value: 'consectetur', label: 'Consectetur' },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'lorem', label: 'Lorem' },
      { value: 'ipsum', label: 'Ipsum' },
      { value: 'dolor', label: 'Dolor' },
      { value: 'sit', label: 'Sit' },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'lorem', label: 'Lorem' },
      { value: 'ipsum', label: 'Ipsum' },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [{ value: 'lorem', label: 'Lorem' }],
  },
]

export type SortOptionTypes = {
  name: string
  href: string
}

export const sortOptionsData: SortOptionTypes[] = [
  { name: 'Lorem', href: '#' },
  { name: 'Ipsum', href: '#' },
  { name: 'Dolor', href: '#' },
  { name: 'Sit', href: '#' },
  { name: 'Amet', href: '#' },
]
