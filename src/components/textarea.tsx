import * as React from 'react';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentPropsWithoutRef<'textarea'>
>(function Textarea(props, ref) {
  return (
    <textarea
      className="cursor-pointer rounded-lg text-neutral-dark-blue block w-full border-neutral-light-gray-2 px-6 placeholder:text-neutral-gray-blue focus:ring-0 focus:border-primary-moderate-blue"
      rows={4}
      ref={ref}
      {...props}></textarea>
  );
});
