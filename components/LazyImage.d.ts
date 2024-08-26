import { CommonProps } from '../index'
import React from 'react'

export interface ImagePropsBase extends CommonProps {
  src: string
  alt?: string
  fallbackSrc?: string
}

export type ConditionPlaceholder =
  | {
      customPlaceholder?: React.ReactNode
      placeholderClassName?: never
    }
  | {
      customPlaceholder?: never
      placeholderClassName?: string
    }

export type ImageProps = ImagePropsBase & ConditionPlaceholder
