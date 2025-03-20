import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch';

import { cn } from '@/lib/utils';

export function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitives.Root>) {
  return (
    <SwitchPrimitives.Root
      className={cn(
        'bg-primary-marine-blue inline-flex h-5 w-[38px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        className
      )}
      {...props}>
      <SwitchPrimitives.Thumb
        className={cn(
          'pointer-events-none block size-3 rounded-full bg-white ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-1'
        )}
      />
    </SwitchPrimitives.Root>
  );
}
