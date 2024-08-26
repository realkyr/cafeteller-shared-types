import { CommonProps } from '../index'

interface CardProps extends CommonProps {
  title: string
  src: string
  description: string
  alt?: string
  fallbackSrc?: string

  titleProps?: CommonProps
  descriptionProps?: CommonProps
}
