import React from 'react';
import { cn } from '@/lib/utils';

interface Props {
  name: string;
  imageUrl: string;
  description: string;
  techs: string[];
  className?: string;
}

export const ProjectItem: React.FC<Props> = ({ name, imageUrl, description, techs, className }) => {
  return (
    <article
      className={cn(
        'project-item flex w-full h-[240px] sm:h-full sm:max-h-[330px] md:max-h-[432px] relative rounded-lg overflow-hidden',
        className,
      )}>
      <div className="w-full h-full">
        <img src={imageUrl} alt={name} className="w-full h-full object-cover select-none" />
      </div>
      <div className="project-info text-white flex flex-col gap-y-1 p-4 sm:p-6">
        <h3 className="text-xl sm:text-3xl">{name}</h3>
        <p className="text-lg sm:text-xl mb-1">{description}</p>
        <ul className="flex flex-wrap gap-x-4">
          {techs.map((tech, i) => (
            <li key={i} className="font-bold p-1 bg-gray-100/30 rounded-xl bg-opacity-60">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
