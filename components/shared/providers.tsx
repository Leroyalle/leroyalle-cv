import React from 'react';
import NextTopLoader from 'nextjs-toploader';
import { Background } from './background';

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Background>{children}</Background>
      <NextTopLoader />
    </>
  );
};
