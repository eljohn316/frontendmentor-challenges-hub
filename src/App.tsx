import { ThemeProvider } from '@/providers/theme-provider';
import { AppWrapper } from '@/components/app-wrapper';
import { TodoHeader } from '@/components/todo-header';
import { TodoWrapper } from '@/components/todo-wrapper';

function App() {
  return (
    <ThemeProvider>
      <AppWrapper>
        <TodoHeader />
        <TodoWrapper />
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
