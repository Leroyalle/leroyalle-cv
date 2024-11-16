import React from 'react';
import { cn } from '@/lib/utils';
import { contactsData } from '@/constants';
import { MotionDiv } from './motion-div';

interface Props {
  className?: string;
}

export const Contacts: React.FC<Props> = ({ className }) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: 'easeInOut', delay: 0.5 }}
      className={cn('flex justify-center w-full', className)}>
      <div className="max-w-[900px] w-full flex">
        <ul className="flex flex-wrap gap-x-4 justify-center">
          {contactsData.map((contact, i) => (
            <li key={i}>
              <a
                className="flex gap-x-1 text-[12px] 2xl:text-sm items-center text-foreground/70 transition hover:text-foreground/50"
                target="_blank"
                href={contact.link}>
                <contact.icon size={15} />
                {contact.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </MotionDiv>
  );
};
