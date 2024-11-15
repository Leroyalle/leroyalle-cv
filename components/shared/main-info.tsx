import React from 'react';
import { cn } from '@/lib/utils';
import { Skills } from './skills';
import { Skill } from '@prisma/client';

interface Props {
  skills: Skill[];
  className?: string;
}

export const MainInfo: React.FC<Props> = ({ skills, className }) => {
  return (
    <article className={cn('flex flex-col items-center', className)}>
      <div className="py-14 flex flex-col max-w-[900px] w-full">
        <h1 className="text-2xl sm:text-[40px] self-center mb-10">
          <mark className="bg-transparent text-foreground">
            Nikolay Melonov. Frontend Developer.
          </mark>
        </h1>
        <Skills items={skills} />
      </div>
    </article>
  );
};
