import React from 'react'
import { CommonProps } from '../index'

export interface FloatingButtonProps extends CommonProps {
  icon: React.ReactNode
  onClick?: () => void
}
