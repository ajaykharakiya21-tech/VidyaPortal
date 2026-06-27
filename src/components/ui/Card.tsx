'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: ReactNode;
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  elevated?: boolean;
}

export function Card({
  children,
  className,
  header,
  footer,
  elevated = true,
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 overflow-hidden',
        elevated && 'shadow-elevated',
        className
      )}
    >
      {header && (
        <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-saffron-50 to-transparent">
          {header}
        </div>
      )}
      <div className="px-6 py-4">{children}</div>
      {footer && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          {footer}
        </div>
      )}
    </div>
  );
}
