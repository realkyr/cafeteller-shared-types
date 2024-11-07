import { CommonProps } from '../index'

export interface FileDropProps extends CommonProps {
  type?: 'image' | 'file'
  mode?: 'single' | 'multiple'
  onFileChange?: (file: FileList) => void
  onClear?: () => void
  loading?: boolean
  innerDivClassName?: string
}
