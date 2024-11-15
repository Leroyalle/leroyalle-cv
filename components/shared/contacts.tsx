import React from 'react';
import { cn } from '@/lib/utils';
import { contactsData } from '@/constants';

interface Props {
  className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex justify-center w-full', className)}>
      <div className="max-w-[900px] w-full flex">
        <ul className="flex flex-wrap gap-x-4 justify-center">
          {contactsData.map((contact, i) => (
            <li key={i}>
              <a
                className="flex gap-x-1 text-[12px] 2xl:text-sm items-center text-foreground/70"
                href={contact.link}>
                <contact.icon size={15} />
                {contact.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
