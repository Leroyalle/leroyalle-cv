import React from 'react';
import { cn } from '@/lib/utils';
import { Sheet, SheetTrigger } from '../ui';
import { ProjectDrawer } from './project-drawer';
import { TechList } from './tech-list';
import { ProjectItem as TProjectItem, Tech } from '@prisma/client';

interface Props {
  name: string;
  imageUrl: string;
  description: string;
  techs: Tech[];
  projectItem: TProjectItem | null;
  className?: string;
}

export const ProjectItem: React.FC<Props> = ({
  name,
  imageUrl,
  description,
  techs,
  projectItem,
  className,
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <article
          className={cn(
            'project-item flex w-full h-[240px] sm:h-full sm:max-h-[330px] md:max-h-[432px] relative rounded-lg overflow-hidden',
            className,
          )}>
          <div className="w-full h-full">
            <img src={imageUrl} alt={name} className="w-full h-full object-cover select-none" />
          </div>
          <div className="project-info text-white flex flex-col gap-y-1 p-4 sm:p-6 items-start text-start">
            <h3 className="text-xl sm:text-3xl">{name}</h3>
            <p className="text-lg sm:text-xl mb-1">{description}</p>
            <TechList techs={techs} />
          </div>
        </article>
      </SheetTrigger>
      <ProjectDrawer
        name={name}
        projectItem={projectItem}
        shortDescription={description}
        imageUrl={imageUrl}
        techs={techs}
      />
    </Sheet>
  );
};
