import { Contacts, Container, MainInfo } from '@/components/shared';
import { prisma } from '@/prisma/prisma-client';

export default async function Home() {
  try {
    const skills = await prisma.skill.findMany();
    return (
      <Container>
        <MainInfo skills={skills} />
        <Contacts />
      </Container>
    );
  } catch (err) {
    console.log(err);
    return <div>Произошла ошибка получения данных.</div>;
  }
}
