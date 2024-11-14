import Dexie, { EntityTable } from 'dexie';

interface User {
  image: {
    png: string;
    webp: string;
  };
  username: string;
}

interface CommentWithoutReplies {
  id: number;
  content: string;
  createdAt: Date;
  score: number;
  user: User;
}

interface Reply extends CommentWithoutReplies {
  replyingTo: string;
  commentId: number;
}

interface CommentWithReplies extends CommentWithoutReplies {
  replies: Reply[];
}

const db = new Dexie('CommentsDatabase') as Dexie & {
  comments: EntityTable<CommentWithReplies, 'id'>;
};

db.version(1).stores({
  comments: '++id, content, createdAt, score, user, replies'
});

export type { User, CommentWithReplies, CommentWithoutReplies, Reply };
export { db };
