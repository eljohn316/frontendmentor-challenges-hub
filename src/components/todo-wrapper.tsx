import styled from 'styled-components';
import { TodoForm } from '@/components/todo-form';
import { TodoItems } from '@/components/todo-items';

const MainWrapper = styled.div`
  margin-top: 3rem;

  & > *:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

const todos = [
  {
    id: 1,
    done: true,
    task: 'Complete online JavaScript course'
  },
  {
    id: 2,
    done: false,
    task: 'Jog around the park 3x'
  },
  {
    id: 3,
    done: false,
    task: '10 minutes meditation'
  },
  {
    id: 4,
    done: false,
    task: 'Read for 1 hour'
  },
  {
    id: 5,
    done: false,
    task: 'Complete Todo App on FrontendMentor'
  }
];

export function TodoWrapper() {
  return (
    <MainWrapper>
      <TodoForm />
      <TodoItems todos={todos} />
    </MainWrapper>
  );
}
