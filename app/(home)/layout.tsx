import { Container, Header } from '@/components/shared';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nikolay Melonov | Frontend Developer',
  description: 'Портфолио Frontend-разработчика Nikolay Melonov',
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen">
      <Container>
        <Header />
        {children}
      </Container>
    </main>
  );
}
