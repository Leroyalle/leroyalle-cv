import React from 'react';
import { cn } from '@/lib/utils';
import { SkillsList } from './skills-list';
import { TooltipProvider } from '../ui';

interface Props {
  items: any;
  className?: string;
}

export const Skills: React.FC<Props> = ({ items, className }) => {
  return (
    <section className={cn('flex flex-col gap-y-3', className)}>
      <TooltipProvider>
        <SkillsList title={'Frontend'} items={items.frontend} className="mb-4" />
        <SkillsList title={'Backend'} items={items.backend} />
      </TooltipProvider>
    </section>
  );
};
