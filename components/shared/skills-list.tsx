import React from 'react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { SkillsItem } from './skills-item';

interface Props {
  title: string;
  items: any;
  className?: string;
}

export const SkillsList: React.FC<Props> = ({ title, items, className }) => {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-x-5 items-center', className)}>
      <h3 className="text-2xl self-start mb-3 sm:mb-0 sm:self-center">{title + ':'}</h3>
      <ul className="flex flex-wrap items-start self-start gap-3">
        {items.map((item, i) => (
          <li key={i}>
            <SkillsItem imageUrl={item.imageUrl} name={item.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
