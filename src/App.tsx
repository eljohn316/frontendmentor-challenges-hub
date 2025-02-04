import { AppWrapper } from '@/components/app-wrapper';
import { TodoHeader } from '@/components/todo-header';
import { TodoWrapper } from '@/components/todo-wrapper';
import { Attribution } from '@/components/attribution';

function App() {
  return (
    <>
      <AppWrapper>
        <TodoHeader />
        <TodoWrapper />
      </AppWrapper>
      <Attribution />
    </>
  );
}

export default App;
