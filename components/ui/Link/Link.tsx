import type { FC, AnchorHTMLAttributes } from 'react'
import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import cn from 'clsx'
import s from './Link.module.css'

export interface LinkProps {
  className?: string
  href?: string
  variant?: 'primary' | 'secondary' | 'blend'
}

const Link: FC<
  LinkProps & NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ className, href, prefetch, variant = 'secondary', ...props }) => {
  const rootClassName = cn(s.root, [s[`${variant}`]], className)

  return (
    <NextLink href={href} prefetch={prefetch}>
      <a className={rootClassName} {...props}></a>
    </NextLink>
  )
}

export default Link
