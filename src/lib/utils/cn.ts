import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx
 * Useful for conditional classes and overriding defaults
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
