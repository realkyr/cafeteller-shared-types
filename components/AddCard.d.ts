import { CommonProps } from '../index'

export interface AddCardProps extends CommonProps {
  onClick: () => void
  title?: string
}
