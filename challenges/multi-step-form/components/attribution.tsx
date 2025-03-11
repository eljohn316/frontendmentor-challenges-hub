import * as React from 'react';
import BaseLink from 'next/link';
import { cn } from '@/lib/utils';

function Link({ className, children, ...props }: React.ComponentProps<typeof BaseLink>) {
  return (
    <BaseLink className={cn('font-medium hover:underline', className)} {...props} target="_blank">
      {children}
    </BaseLink>
  );
}

export function Attribution({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('px-4 py-5 hidden lg:block', className)} {...props}>
      <p className="text-center text-neutral-400 text-sm">
        Challenge by <Link href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</Link>
        . Coded by <Link href="https://github.com/eljohn316">El John Bonga</Link>.
      </p>
    </div>
  );
}
