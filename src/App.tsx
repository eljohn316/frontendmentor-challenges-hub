import { AppWrapper } from '@/components/app-wrapper';
import { TodoHeader } from '@/components/todo-header';
import { TodoWrapper } from '@/components/todo-wrapper';

function App() {
  return (
    <AppWrapper>
      <TodoHeader />
      <TodoWrapper />
    </AppWrapper>
  );
}

export default App;
