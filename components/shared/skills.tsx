import React from 'react';
import { cn } from '@/lib/utils';
import { SkillsList } from './skills-list';
import { TooltipProvider } from '../ui';
import { Skill } from '@prisma/client';

interface Props {
  items: Skill[];
  className?: string;
}

export const Skills: React.FC<Props> = ({ items, className }) => {
  if (!items || items.length === 0) {
    return null;
  }
  return (
    <section className={cn('flex flex-col gap-y-3', className)}>
      <TooltipProvider>
        <SkillsList
          title={'Frontend'}
          items={items.filter((item) => item.category === 'Frontend')}
          className="mb-4"
        />
        <SkillsList title={'Backend'} items={items.filter((item) => item.category === 'Backend')} />
      </TooltipProvider>
    </section>
  );
};
