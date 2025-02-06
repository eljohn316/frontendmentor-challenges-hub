import styled from 'styled-components';
import { TodoForm } from '@/components/todo-form';
import { TodoItems } from '@/components/todo-items';
import { useTodos } from '@/hooks/use-todos';
import { useState } from 'react';

const MainWrapper = styled.div`
  margin-top: 3rem;

  & > *:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

export type Filter = 'all' | 'active' | 'completed';

export function TodoWrapper() {
  const { todos, createTodo } = useTodos();
  const [filter, setFilter] = useState<Filter>('all');

  const filteredTodos =
    filter === 'all'
      ? todos
      : filter === 'active'
      ? todos.filter((t) => !t.done)
      : todos.filter((t) => t.done);

  function action(formData: FormData) {
    const task = formData.get('task') as string | null;
    const done = formData.get('done');

    if (!task) return;

    createTodo({ task, done: done ? true : false });
  }

  return (
    <MainWrapper>
      <TodoForm action={action} />
      <TodoItems
        todos={filteredTodos}
        filter={filter}
        onFilter={(filter: Filter) => setFilter(filter)}
      />
    </MainWrapper>
  );
}
