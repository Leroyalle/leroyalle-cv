import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectWithRelations } from '@/@types/prisma';
import { ProjectItem } from './project-item';

interface Props {
  projects: ProjectWithRelations[];
  className?: string;
}

export const ProjectList: React.FC<Props> = ({ projects, className }) => {
  return (
    <section className={cn('mb-16', className)}>
      <h1 className="text-foreground text-2xl sm:text-[40px] self-center mb-10">Проекты</h1>
      <ul className="flex flex-col gap-y-16">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            imageUrl={project.imageUrl}
            description={project.shortDescription}
            techs={project.techs}
            projectItem={project.projectItem}
          />
        ))}
      </ul>
    </section>
  );
};
