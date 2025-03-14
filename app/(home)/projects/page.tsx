import { Container, ProjectList } from '@/components/shared';
import { MotionDiv } from '@/components/shared/motion-div';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';

export const revalidate = 360;

export default async function Projects() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        techs: true,
        projectItem: true,
      },
    });

    if (projects.length === 0) {
      return notFound();
    }

    return (
      <Container className="max-w-[800px]">
        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', delay: 0.2 }}>
          <ProjectList projects={projects} />
        </MotionDiv>
      </Container>
    );
  } catch (err) {
    console.log(err);
    return <div>Произошла ошибка получения данных.</div>;
  }
}
