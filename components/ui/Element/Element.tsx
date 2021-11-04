import { FC, ComponentType, HTMLAttributes } from 'react'
import cn from 'classnames'
import s from './Element.module.css'

interface Props {
  className?: string
  label?: string
  type?: Type
  variant?: Variant
  children?: any
}

type Type = 'div' | 'section'

type Variant = 'white' | 'black' | 'gray'

const Element: FC<Props> = ({
  className,
  label,
  type = 'div',
  variant = 'white',
  children,
}) => {
  const Component: ComponentType<any> | string = type as any
  const ariaLabel = label && `${label.toLowerCase().replace(' ', '-')}-heading`

  return (
    <Component
      aria-labelledby={ariaLabel}
      className={cn(
        s.root,
        {
          'bg-white dark:bg-black': variant === 'white',
          'bg-black dark:bg-white': variant === 'black',
          'bg-accents-1 dark:bg-accents-8': variant === 'gray',
        },
        className
      )}
    >
      {type === 'section' && (
        <h2 id={ariaLabel} className='sr-only'>
          {label}
        </h2>
      )}
      {children}
    </Component>
  )
}

export default Element
