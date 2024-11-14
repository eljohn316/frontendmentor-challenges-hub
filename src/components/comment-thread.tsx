import { useLiveQuery } from 'dexie-react-hooks';
import { CommentWithReplies, db } from '../db';
import { CommentCard } from './comment-card';

function Comment({ comment }: { comment: CommentWithReplies }) {
  return (
    <div className="space-y-5">
      <CommentCard type="comment" comment={comment} />
      <div className="mt-4 space-y-6 border-l-2 border-l-neutral-light-gray-2 pl-5 md:pl-10 md:ml-10">
        {comment.replies
          .sort((a, b) => a.createdAt.valueOf() - b.createdAt.valueOf())
          .map((reply) => (
            <CommentCard key={reply.id} type="reply" comment={reply} />
          ))}
      </div>
    </div>
  );
}

const getComments = () => db.comments.orderBy('score').reverse().toArray();

export function CommentThread() {
  const comments = useLiveQuery(getComments);

  if (!comments) return;

  return (
    <div className="max-w-3xl mx-auto my-10 space-y-6 px-6">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
