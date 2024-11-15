import React from 'react';
import { cn } from '@/lib/utils';
import { Skills } from './skills';
import { skillsData } from '@/constants';

interface Props {
  className?: string;
}

export const MainInfo: React.FC<Props> = ({ className }) => {
  return (
    <article className={cn('flex flex-col items-center', className)}>
      <div className="py-14 flex flex-col max-w-[900px] w-full">
        <h1 className="text-2xl sm:text-[40px] self-center mb-10">
          <mark className="bg-transparent">I&apos;m Frontend Developer</mark>
        </h1>
        <Skills items={skillsData} />
      </div>
    </article>
  );
};
