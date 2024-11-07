export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children?: React.ReactNode
  footer?: React.ReactNode
  onSuccess?: () => void
}
