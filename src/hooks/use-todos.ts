import { useCallback } from 'react';
import { useLocalStorage } from './use-local-storage';

const initialTodos = [
  {
    id: '1',
    done: true,
    task: 'Complete online JavaScript course'
  },
  {
    id: '2',
    done: false,
    task: 'Jog around the park 3x'
  },
  {
    id: '3',
    done: false,
    task: '10 minutes meditation'
  },
  {
    id: '4',
    done: false,
    task: 'Read for 1 hour'
  },
  {
    id: '5',
    done: false,
    task: 'Complete Todo App on FrontendMentor'
  }
];

export type Todo = {
  id: string;
  done: boolean;
  task: string;
};

export function useTodos() {
  const [todos, setItem] = useLocalStorage('todos', initialTodos);

  const createTodo = useCallback(
    ({ task, done }: Pick<Todo, 'task' | 'done'>) => {
      const newTodos = [...todos, { id: crypto.randomUUID(), done, task }];
      setItem(newTodos);
    },
    [todos, setItem]
  );

  const removeTodo = useCallback(
    (todoId: string) => {
      const filteredTodos = todos.filter((todo) => todo.id !== todoId);
      setItem(filteredTodos);
    },
    [todos, setItem]
  );

  const updateTodo = useCallback(
    (todoId: string, updates: Partial<Pick<Todo, 'done' | 'task'>>) => {
      const newTodos: Todo[] = todos.map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              task: updates.task ?? todo.task,
              done: updates.done ?? todo.done
            }
          : todo
      );
      setItem(newTodos);
    },
    [todos, setItem]
  );

  const clearCompletedTodos = useCallback(() => {
    const uncompletedTodos = todos.filter((todo) => !todo.done);
    setItem(uncompletedTodos);
  }, [todos, setItem]);

  return {
    todos,
    createTodo,
    removeTodo,
    updateTodo,
    clearCompletedTodos
  };
}
