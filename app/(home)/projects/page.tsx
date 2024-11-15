import { Container, ProjectList } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Projects() {
  const projects = await prisma.project.findMany({
    include: {
      tech: true,
    },
  });
  return (
    <Container className="max-w-[800px]">
      <ProjectList projects={projects} />
    </Container>
  );
}
