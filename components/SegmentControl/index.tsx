export interface Options {
  label: React.ReactNode
  value: string
}

export interface SegmentControlProps {
  options: Options[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}
