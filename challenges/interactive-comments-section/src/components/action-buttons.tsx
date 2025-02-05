import * as React from 'react';
import { DeleteIcon, EditIcon, ReplyIcon } from './icons';

const ReplyActionButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(function ReplyActionButton(props, ref) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 font-medium text-primary-moderate-blue hover:text-primary-light-gray-blue"
      ref={ref}
      {...props}>
      <ReplyIcon aria-hidden="true" />
      Reply
    </button>
  );
});

const DeleteActionButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(function ReplyActionButton(props, ref) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 font-medium text-primary-soft-red hover:text-primary-pale-red"
      ref={ref}
      {...props}>
      <DeleteIcon aria-hidden="true" />
      Delete
    </button>
  );
});

const EditActionButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(function ReplyActionButton(props, ref) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-x-2 font-medium text-primary-moderate-blue hover:text-primary-light-gray-blue"
      ref={ref}
      {...props}>
      <EditIcon aria-hidden="true" />
      Edit
    </button>
  );
});

export { ReplyActionButton, DeleteActionButton, EditActionButton };
