import { useEffect } from 'react';
import { db } from './db';
import { comments } from './data';
import { CommentThread } from './components/comment-thread';
import { CommentForm } from './components/comment-form';

function App() {
  useEffect(() => {
    db.on('ready', async (db) => {
      const table = db.table('comments');
      const count = await table.count();

      if (count > 0) {
        console.log('Database already populated');
      } else {
        await table.bulkAdd(comments);
        console.log('Database successfully populated');
      }
    });

    db.open();
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-10 space-y-6 px-4">
      <CommentThread />
      <CommentForm />
    </div>
  );
}

export default App;
