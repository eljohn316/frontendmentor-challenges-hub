import { FormEvent, useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { CommentWithoutReplies, db, Reply } from '../db';
import { currentUser } from '../data';
import { cn, getImage } from '../utils';

import { ScoreControls } from './score-controls';
import { Textarea } from './textarea';
import { CommentForm } from './comment-form';
import {
  DeleteActionButton,
  EditActionButton,
  ReplyActionButton
} from './action-buttons';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle
} from '@headlessui/react';

type CommentCardProps =
  | { type: 'comment'; comment: CommentWithoutReplies }
  | { type: 'reply'; comment: Reply };

export function CommentCard({ type, comment }: CommentCardProps) {
  const [toggleReplyForm, setToggleReplyForm] = useState<boolean>(false);
  const [toggleEditForm, setToggleEditForm] = useState<boolean>(false);
  const [toggleConfirmDeleteModal, setToggleConfirmDeleteModal] =
    useState<boolean>(false);

  async function handleUpdateScore(direction: 'upvote' | 'downvote') {
    const newScore =
      direction === 'upvote' ? comment.score + 1 : comment.score - 1;

    try {
      if (type === 'comment') {
        await db.comments.update(comment.id, { score: newScore });
      } else {
        const reply = await db.comments.get(comment.commentId);

        if (!reply) return;

        const updatedReplies = reply.replies.map((r) => {
          if (r.id === comment.id) return { ...r, score: newScore };
          return r;
        });

        await db.comments.update(reply.id, { replies: updatedReplies });
      }
    } catch (error) {
      console.error('Unable to update comment score', error);
    }
  }

  async function handleReply(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const content = formData.get('comment') as string;

    if (!content) return;

    const currentComment = await db.comments.get(
      type === 'comment' ? comment.id : comment.commentId
    );

    if (!currentComment) return;

    const newReply: Reply = {
      content: content.replace(`@${comment.user.username}`, ''),
      createdAt: new Date(),
      id: Date.now(),
      replyingTo: comment.user.username,
      user: currentUser,
      score: 0,
      commentId: currentComment.id
    };

    const newReplies = [...currentComment.replies, newReply];

    try {
      await db.comments.update(currentComment.id, { replies: newReplies });
    } catch (error) {
      console.error('Unable to add comment reply', error);
    }

    setToggleReplyForm(false);
  }

  async function handleDeleteComment() {
    try {
      if (type === 'comment') {
        await db.comments.delete(comment.id);
      } else {
        const currentComment = await db.comments.get(comment.commentId);

        if (!currentComment) return;

        const newReplies = currentComment.replies.filter(
          (reply) => reply.id !== comment.id
        );

        await db.comments.update(currentComment.id, { replies: newReplies });
      }
    } catch (error) {
      console.error('Unable to delete comment', error);
    }
  }

  async function handleEditComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const content = formData.get('comment') as string;

    if (!content) return;

    try {
      if (type === 'comment') {
        await db.comments.update(comment.id, { content });
      } else {
        const currentComment = await db.comments.get(comment.commentId);

        if (!currentComment) return;

        const newReplies = currentComment.replies.map((reply) => {
          if (reply.id === comment.id) return { ...reply, content };
          return reply;
        });

        await db.comments.update(currentComment.id, { replies: newReplies });
      }
    } catch (error) {
      console.error('Unable to update comment', error);
    }

    setToggleEditForm(false);
  }

  const actions =
    comment.user.username === currentUser.username ? (
      <div className="space-x-4 md:space-x-5">
        <DeleteActionButton onClick={() => setToggleConfirmDeleteModal(true)} />
        <EditActionButton onClick={() => setToggleEditForm(!toggleEditForm)} />
      </div>
    ) : (
      <ReplyActionButton onClick={() => setToggleReplyForm(!toggleReplyForm)} />
    );

  return (
    <>
      <Dialog
        open={toggleConfirmDeleteModal}
        as="div"
        transition
        className="relative z-10 focus:outline-none transition duration-200 ease-out data-[closed]:opacity-0"
        onClose={() => setToggleConfirmDeleteModal(false)}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition duration-200 ease-out data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-sm rounded-xl bg-white p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0">
              <DialogTitle
                as="h3"
                className="text-[22px] font-medium text-neutral-dark-blue">
                Delete comment
              </DialogTitle>
              <p className="mt-4 text-neutral-gray-blue">
                Are you sure you want to delete this comment? This will remove
                the comment and can&apos;t be undone.
              </p>
              <div className="mt-6 flex gap-x-3">
                <button
                  type="button"
                  className="flex-1 bg-neutral-gray-blue text-white uppercase rounded-md px-4 py-2"
                  onClick={() => setToggleConfirmDeleteModal(false)}>
                  No, cancel
                </button>
                <button
                  type="button"
                  className="flex-1 bg-primary-soft-red text-white uppercase rounded-md px-4 py-2"
                  onClick={handleDeleteComment}>
                  Yes, delete
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className={cn(toggleReplyForm && 'space-y-3')}>
        <div className="bg-white rounded-md p-6 md:flex md:gap-x-5">
          <div className="hidden flex-none md:block">
            <ScoreControls
              direction="col"
              score={comment.score}
              onUpvote={() => handleUpdateScore('upvote')}
              onDownvote={() => handleUpdateScore('downvote')}
            />
          </div>
          <div className="flex-auto">
            <div className="md:flex md:justify-between md:items-center">
              <div className="flex items-center">
                <img
                  src={getImage(comment.user.username)}
                  alt={comment.user.username}
                  className="size-9 rounded-full"
                />
                <div className="ml-4 flex items-center gap-x-3">
                  <p className="font-medium text-neutral-dark-blue">
                    {comment.user.username}
                  </p>
                  {comment.user.username === currentUser.username && (
                    <span className="bg-primary-moderate-blue text-white text-sm font-medium rounded-sm leading-none py-1 px-2">
                      you
                    </span>
                  )}
                  <p className="text-neutral-gray-blue">
                    {formatDistanceToNowStrict(comment.createdAt)} ago
                  </p>
                </div>
              </div>
              <div className="hidden md:block">{actions}</div>
            </div>
            <div className="my-4 md:mb-0">
              {toggleEditForm ? (
                <form className="space-y-4" onSubmit={handleEditComment}>
                  <Textarea
                    name="comment"
                    id="comment"
                    placeholder="Add a comment..."
                    defaultValue={
                      type === 'comment'
                        ? comment.content
                        : '@' + comment.replyingTo + ' ' + comment.content
                    }
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-primary-moderate-blue text-white uppercase text-sm font-medium px-6 py-2 rounded-md hover:bg-primary-light-gray-blue">
                      Update
                    </button>
                  </div>
                </form>
              ) : (
                <p className="text-neutral-gray-blue">
                  {type === 'comment'
                    ? comment.content
                    : '@' + comment.replyingTo + ' ' + comment.content}
                </p>
              )}
            </div>
            <div className="flex items-center justify-between md:hidden">
              <ScoreControls
                direction="row"
                score={comment.score}
                onUpvote={() => handleUpdateScore('upvote')}
                onDownvote={() => handleUpdateScore('downvote')}
              />
              <div className="block md:hidden">{actions}</div>
            </div>
          </div>
        </div>

        {toggleReplyForm && (
          <CommentForm
            replyingTo={comment.user.username}
            onSubmit={handleReply}
          />
        )}
      </div>
    </>
  );
}
