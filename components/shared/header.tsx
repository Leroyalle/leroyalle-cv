import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Moon } from 'lucide-react';
import { Container } from './container';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('py-10', className)}>
      <Container className="flex items-center justify-between">
        <Link href="/" className="w-[60px] h-[60px] rounded-full overflow-hidden">
          <img src="/img/logo.jpg" alt="Logo" className="w-full h-full" />
        </Link>
        <div className="flex items-center gap-x-3">
          <nav>
            <ul className="flex items-center gap-x-1">
              <li>
                <Link className="p-3" href="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <a className="p-3" href="https://github.com/Leroyalle" target="_blank">
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <Moon />
        </div>
      </Container>
    </header>
  );
};
