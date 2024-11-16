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
  return (
    <section className={cn('flex flex-col gap-y-3', className)}>
      <TooltipProvider>
        <SkillsList
          title={'Frontend'}
          items={items.filter((item) => item.category === 'Frontend')}
          className="mb-4"
          motionDelay={0.2}
        />
        <SkillsList
          title={'Backend'}
          items={items.filter((item) => item.category === 'Backend')}
          motionDelay={0.4}
        />
      </TooltipProvider>
    </section>
  );
};
