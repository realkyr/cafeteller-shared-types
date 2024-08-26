import { UploadResponse } from './Editor'

export interface ImageBlockUploadProps {
  onValueChange?: (value: string) => void
  onImageChange?: (file: File | string | null) => Promise<string>
  caption?: string
  data?: Omit<UploadResponse, 'success'>
  onImageDrop?: (data: Omit<UploadResponse, 'success'>) => void
}
