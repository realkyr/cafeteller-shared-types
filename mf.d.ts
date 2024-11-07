declare module 'core_cafeteller/components' {
  import {
    AddCardProps,
    ButtonProps,
    CardProps,
    EditorProps,
    FloatingButtonProps,
    ImageProps,
    SegmentControlProps,
    FileDropProps
  } from './components'

  export const Card: React.FC<CardProps>
  export const AddCard: React.FC<AddCardProps>
  export const CoffeeLoader: React.FC
  export const LazyImage: React.FC<ImageProps>
  export const Button: React.FC<ButtonProps>
  export const Editor: React.FC<EditorProps>
  export const FloatingButton: React.FC<FloatingButtonProps>
  export const SegmentControl: React.FC<SegmentControlProps>
  export const FileDrop: React.FC<FileDropProps>
}

declare module 'core_cafeteller/icons' {
  import { CommonProps } from './index'

  export const ReviewFace: React.FC<CommonProps>
  export const Search: React.FC<CommonProps>
  export const Instagram: React.FC<CommonProps>
  export const Facebook: React.FC<CommonProps>
  export const Twitter: React.FC<CommonProps>
}
