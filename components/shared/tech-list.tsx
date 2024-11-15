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
    <ul className={cn('flex flex-wrap gap-2', className)}>
      {techs.map((tech, i) => (
        <li key={i} className="font-bold p-1 bg-gray-100/30 rounded-xl bg-opacity-60 text-white">
          {tech.name}
        </li>
      ))}
    </ul>
  );
};
