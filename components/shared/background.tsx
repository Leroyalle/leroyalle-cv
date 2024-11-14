import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Background: React.FC<Props> = ({ children, className }) => {
  return <div className={cn('background', className)}>{children}</div>;
};
