import React from 'react';
import { cn } from '@/lib/utils';
import { SkillsItem } from './skills-item';
import { Skill } from '@prisma/client';
import { MotionDiv } from './motion-div';

interface Props {
  title: string;
  items: Skill[];
  motionDelay?: number;
  className?: string;
}

export const SkillsList: React.FC<Props> = ({ title, items, motionDelay, className }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <MotionDiv
      className={cn('flex flex-col sm:flex-row gap-x-5 items-center', className)}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', delay: motionDelay }}>
      <h3 className="text-xl sm:text-2xl self-start mb-3 sm:mb-0 sm:self-center">{title + ':'}</h3>
      <ul className="flex flex-wrap items-start self-start gap-3">
        {items.map((item, i) => (
          <li key={i}>
            <SkillsItem imageUrl={item.imageUrl} name={item.name} />
          </li>
        ))}
      </ul>
    </MotionDiv>
  );
};
