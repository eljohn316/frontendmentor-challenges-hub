import { useEffect } from 'react';
import { db } from './db';
import { comments } from './data';

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

  return <div>App</div>;
}

export default App;
