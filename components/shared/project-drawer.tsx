import React from 'react';
import {
  Button,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from '../ui';
import { TechList } from './tech-list';
import { ProjectItem, Tech } from '@prisma/client';

interface Props {
  name: string;
  projectItem: ProjectItem | null;
  shortDescription: string;
  imageUrl: string;
  techs: Tech[];
}

export const ProjectDrawer: React.FC<Props> = ({
  name,
  projectItem,
  shortDescription,
  imageUrl,
  techs,
}) => {
  if (!projectItem) {
    return null;
  }

  return (
    <SheetContent className="overflow-y-auto min-w-full sm:min-w-[500px] text-foreground">
      <SheetHeader className="mb-3">
        <SheetTitle className="text-2xl">{name}</SheetTitle>
        <SheetDescription className="">
          <p className="text-lg">{shortDescription}</p>
        </SheetDescription>
      </SheetHeader>
      <div className="flex flex-col items-start gap-y-8 overflow-y-auto mb-6">
        <div className="w-full h-[240px] rounded-lg overflow-hidden">
          <img
            src={projectItem.imagePreview ?? imageUrl}
            alt={name}
            className="w-full h-full object-cover select-none"
          />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-1">О проекте</h4>
          <p className="text-lg">{projectItem.about}</p>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-bold mb-1">Чем занимался на проекте</h4>
          <div
            className="features"
            dangerouslySetInnerHTML={{ __html: projectItem.featuresList }}
          />
        </div>
        <div className="w-full">
          <h4 className="text-lg font-bold mb-1">Технологии</h4>
          <TechList techs={techs} className="text-foreground" />
        </div>
        {projectItem.link && (
          <div className="w-full">
            <h4 className="text-lg font-bold mb-1">Сайт</h4>
            <a href={projectItem.link} target="_blank">
              {projectItem.link}
            </a>
          </div>
        )}
        <div className="w-full">
          <h4 className="text-lg font-bold mb-1">GitHub</h4>
          <a href={projectItem.github} target="_blank">
            {projectItem.github}
          </a>
        </div>
      </div>
      {projectItem.link && (
        <SheetFooter>
          <a className="w-full" href={projectItem.link} target="_blank">
            <Button className="w-full">Перейти на сайт</Button>
          </a>
        </SheetFooter>
      )}
    </SheetContent>
  );
};
