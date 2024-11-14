import { useState } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { CommentWithoutReplies, db, Reply } from '../db';
import { currentUser } from '../data';
import { getImage } from '../utils';

import { ScoreControls } from './score-controls';
import { Textarea } from './textarea';
import { CommentForm } from './comment-form';
import {
  DeleteActionButton,
  EditActionButton,
  ReplyActionButton
} from './action-buttons';

type CommentCardProps =
  | { type: 'comment'; comment: CommentWithoutReplies }
  | { type: 'reply'; comment: Reply };

export function CommentCard({ type, comment }: CommentCardProps) {
  const [toggleReplyForm, setToggleReplyForm] = useState<boolean>(false);
  const [toggleEditForm, setToggleEditForm] = useState<boolean>(false);

  const actions =
    comment.user.username === currentUser.username ? (
      <div className="space-x-4 md:space-x-5">
        <DeleteActionButton onClick={() => {}} />
        <EditActionButton onClick={() => {}} />
      </div>
    ) : (
      <ReplyActionButton onClick={() => setToggleReplyForm(true)} />
    );

  return (
    <div>
      <div className="bg-white rounded-md p-6 md:flex md:gap-x-5">
        <div className="hidden flex-none md:block">
          <ScoreControls
            direction="col"
            score={comment.score}
            onUpvote={() => {}}
            onDownvote={() => {}}
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
              <form className="space-y-4">
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
              onUpvote={() => {}}
              onDownvote={() => {}}
            />
            <div className="block md:hidden">{actions}</div>
          </div>
        </div>
      </div>

      {toggleReplyForm && <CommentForm replyingTo={comment.user.username} />}
    </div>
  );
}
