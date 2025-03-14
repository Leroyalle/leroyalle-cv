import React from 'react';
import { cn } from '@/lib/utils';
import { Tech } from '@prisma/client';

interface Props {
  techs: Tech[];
  className?: string;
}

export const TechList: React.FC<Props> = ({ techs, className }) => {
  if (!techs || techs.length === 0) {
    return null;
  }

  return (
    <ul className={'flex flex-wrap gap-2'}>
      {techs.map((tech, i) => (
        <li
          key={i}
          className={cn(
            'font-bold p-1 bg-accent bg-opacity-50 text-sm rounded-md text-foreground',
            className,
          )}>
          {tech.name}
        </li>
      ))}
    </ul>
  );
};
