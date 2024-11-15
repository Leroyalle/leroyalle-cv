import { Project, ProjectItem, Tech } from '@prisma/client';

export type ProjectWithRelations = Project & {
  techs: Tech[];
  projectItem: ProjectItem | null;
};
