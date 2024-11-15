import { Container, ProjectList } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export default async function Projects() {
  const projects = await prisma.project.findMany({
    include: {
      techs: true,
      projectItem: true,
    },
  });

  if (!projects || projects.length === 0) {
    return notFound();
  }

  return (
    <Container className="max-w-[800px]">
      <ProjectList projects={projects} />
    </Container>
  );
}
