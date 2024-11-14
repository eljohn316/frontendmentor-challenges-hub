import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImage(username: string, format: 'png' | 'webp' = 'webp') {
  return new URL(
    `./assets/avatars/image-${username}.${format}`,
    import.meta.url
  ).href;
}
