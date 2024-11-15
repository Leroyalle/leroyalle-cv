import { Contacts, Container, MainInfo } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  const skills = await prisma.skill.findMany();
  return (
    <Container>
      <MainInfo skills={skills} />
      <Contacts />
    </Container>
  );
}
