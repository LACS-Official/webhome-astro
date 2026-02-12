interface Window {
  showModal?: (imageUrl: string, title?: string, description?: string, actions?: any[]) => void;
  hideModal?: () => void;
}
