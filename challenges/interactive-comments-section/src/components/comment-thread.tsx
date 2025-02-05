import _ from 'lodash';
import { useLiveQuery } from 'dexie-react-hooks';
import { CommentWithReplies, db } from '../db';
import { CommentCard } from './comment-card';

function Comment({ comment }: { comment: CommentWithReplies }) {
  return (
    <div className="space-y-5">
      <CommentCard type="comment" comment={comment} />
      <div className="mt-4 space-y-6 border-l-2 border-l-neutral-light-gray-2 pl-4 md:pl-10 md:ml-10">
        {comment.replies
          .sort((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf())
          .map((reply) => (
            <CommentCard key={reply.id} type="reply" comment={reply} />
          ))}
      </div>
    </div>
  );
}

export function CommentThread() {
  const comments = useLiveQuery(() => db.comments.toArray());

  if (!comments) return;

  const sortedComments = _.orderBy(comments, ['score'], ['desc']);

  return (
    <div className="space-y-6">
      {sortedComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
