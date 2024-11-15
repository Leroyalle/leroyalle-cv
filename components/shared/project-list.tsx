import React from 'react';
import { cn } from '@/lib/utils';
import { ProjectWithRelations } from '@/@types/prisma';
import { ProjectItem } from './project-item';
import Link from 'next/link';

interface Props {
  projects: ProjectWithRelations[];
  className?: string;
}

export const ProjectList: React.FC<Props> = ({ projects, className }) => {
  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section className={cn('mb-16', className)}>
      <h1 className="text-foreground text-2xl sm:text-[40px] self-center mb-10">Проекты</h1>
      <ul className="flex flex-col gap-y-16">
        {projects.map((project) => (
          <Link key={project.id} href={`projects/${project.id}`}>
            <ProjectItem
              name={project.name}
              imageUrl={project.imageUrl}
              description={project.shortDescription}
              techs={project.tech.map((tech) => tech.name)}
            />
          </Link>
        ))}
      </ul>
    </section>
  );
};
