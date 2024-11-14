import { FormEvent, FormEventHandler, useRef } from 'react';
import { Textarea } from './textarea';
import { currentUser } from '../data';
import { db } from '../db';
import { getImage } from '../utils';

interface CommentFormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  replyingTo?: string;
}

export function CommentForm({ onSubmit, replyingTo }: CommentFormProps) {
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const content = formData.get('comment') as string;

    if (!content) return;

    try {
      await db.comments.add({
        content,
        createdAt: new Date(),
        replies: [],
        score: 0,
        user: currentUser
      });
    } catch (error) {
      console.error('Error encountered while adding data', error);
    }

    formRef.current?.reset();
  }

  return (
    <div className="bg-white p-6">
      <form
        className="grid grid-cols-2 gap-5 md:flex"
        onSubmit={onSubmit || handleSubmit}
        ref={formRef}>
        <div className="md:col-span-1">
          <img
            src={getImage(currentUser.username)}
            alt={currentUser.username}
            className="size-9 rounded-full"
          />
        </div>
        <div className="col-span-2 row-start-1 md:flex-auto">
          <Textarea
            name="comment"
            id="comment"
            placeholder="Add a comment..."
            defaultValue={replyingTo ? '@' + replyingTo : ''}
          />
        </div>
        <div className="flex justify-end md:flex-none items-start">
          <button
            type="submit"
            className="bg-primary-moderate-blue text-white uppercase text-sm font-medium px-6 py-2 rounded-md hover:bg-primary-light-gray-blue">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
