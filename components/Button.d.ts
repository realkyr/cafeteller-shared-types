import { CommonProps } from '../index'

export interface ButtonProps extends CommonProps {
  children: React.ReactNode
  type?: 'primary' | 'secondary' | 'danger' | 'default'
  outline?: boolean
  onClick?: () => void
}
