import React from 'react';
import { cn } from '@/lib/utils';
import { Skills } from './skills';
import { Skill } from '@prisma/client';
import { MotionDiv } from './motion-div';

interface Props {
  skills: Skill[];
  className?: string;
}

export const MainInfo: React.FC<Props> = ({ skills, className }) => {
  return (
    <article className={cn('flex flex-col items-center', className)}>
      <div className="py-14 flex flex-col max-w-[1000px] w-full">
        <MotionDiv
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut' }}>
          <h1 className="text-3xl sm:text-[40px] self-center mb-10">
            <mark className="bg-transparent text-foreground">
              Nikolay Melonov. <br className="sm:hidden" /> Frontend Developer.
            </mark>
          </h1>
        </MotionDiv>
        <Skills items={skills} />
      </div>
    </article>
  );
};
