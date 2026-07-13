// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="vite/client" />
/// <reference types="../vendor/integration/types.d.ts" />

interface Window {
  showModal?: (
    imageUrl: string,
    title?: string,
    description?: string,
    actions?: Array<{
      text: string;
      href?: string;
      target?: string;
      icon?: string;
      className?: string;
    }>
  ) => void;
  hideModal?: () => void;
}

