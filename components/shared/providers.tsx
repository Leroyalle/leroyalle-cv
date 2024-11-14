import React from 'react';
import NextTopLoader from 'nextjs-toploader';

interface Props {
  children: React.ReactNode;
}

export const Providers: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <NextTopLoader />
    </>
  );
};
