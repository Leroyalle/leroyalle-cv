import { Project, Tech } from '@prisma/client';

export type ProjectWithRelations = Project & {
  tech: Tech[];
};
