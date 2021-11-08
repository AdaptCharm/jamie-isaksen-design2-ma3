import type {
  FC,
  ButtonHTMLAttributes,
  JSXElementConstructor,
  AnchorHTMLAttributes,
} from 'react'
import cn from 'clsx'
import s from './Button.module.css'

export type ButtonComponentType = 'button' | 'a' | JSXElementConstructor<any>

export interface ButtonProps<C extends ButtonComponentType = 'button'> {
  href?: string
  className?: string
  variant?: 'primary' | 'secondary'
  ghost?: boolean
  size?: 'small' | 'medium' | 'large'
  shape?: 'square' | 'circle'
  active?: boolean
  type?: 'submit' | 'reset' | 'button'
  Component?: C
  width?: string | number
  loading?: boolean
  disabled?: boolean
}

export type ButtonHTMLType<C extends ButtonComponentType = 'button'> =
  C extends 'a'
    ? AnchorHTMLAttributes<HTMLAnchorElement>
    : ButtonHTMLAttributes<HTMLButtonElement>

type ButtonFC<C extends ButtonComponentType = 'button'> = FC<
  ButtonHTMLType<C> & ButtonProps<C>
>

type ButtonType = <C extends ButtonComponentType = 'button'>(
  ...args: Parameters<ButtonFC<C>>
) => ReturnType<ButtonFC<C>>

const Button: ButtonFC = ({
  width,
  active,
  children,
  variant = 'primary',
  ghost,
  Component = 'button',
  disabled = false,
  loading = false,
  style = {},
  size = 'medium',
  shape,
  className,
  ...rest
}) => {
  const rootClassName = cn(
    s.reset,
    s.base,
    s.root,
    [s[`${variant}`]],
    [s[`${size}`]],
    [s[`${shape}`]],
    {
      [s.shape]: shape,
      [s.ghost]: ghost,
      [s.disabled]: disabled,
    },
    className
  )

  return (
    <Component
      aria-pressed={active}
      data-variant={variant}
      className={rootClassName}
      disabled={disabled}
      style={{
        width,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default Button as ButtonType
