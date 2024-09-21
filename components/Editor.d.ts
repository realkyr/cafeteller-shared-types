import { OutputData } from '@editorjs/editorjs'

export interface ImageData {
  src?: Omit<UploadResponse, 'success'>
  captions?: string
}

export interface URLSImageSrc {
  '@1980': string
  '@1024': string
  '@720': string
}

export interface UploadResponse {
  success: number
  id: number
  urls: URLSImageSrc
}

export interface EditorProps {
  uploadCallback?: (file: File) => Promise<UploadResponse>
  saveRef?: React.MutableRefObject<{ save: () => Promise<any> }>
}
