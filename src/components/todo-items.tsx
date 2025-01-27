import styled, { css } from 'styled-components';
import { Card } from '@/components/card';
import { CheckboxInput } from '@/components/checkbox';
import { BaseButton } from '@/components/base-button';
import { CrossIcon } from '@/components/icons';
import { VisuallyHidden } from '@/components/visually-hidden';
import { useTodos, type Todo } from '@/hooks/use-todos';
import { type Filter } from '@/components/todo-wrapper';

const Wrapper = styled(Card)`
  :root & {
    --shadow-color: hsl(236, 33%, 92%);
  }
  :root[data-theme='dark'] & {
    --shadow-color: hsl(235, 21%, 11%);
  }

  padding: 0;
  box-shadow: 0px 50px 60px 5px var(--shadow-color);
  border-radius: 0.375rem;
  overflow: hidden;

  & > *:not(:last-child) {
    border-bottom: 1px solid var(--clr-border);
  }
`;

const TodoItem = styled(Card)`
  border-radius: 0;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input[type='checkbox'] {
    flex: none;
  }

  @media (min-width: 38rem) {
    gap: 1.125rem;
  }
`;

const TodoItemLabel = styled.label<{ $done?: boolean }>`
  flex: 1 1 auto;
  cursor: pointer;
  ${(props) =>
    props.$done
      ? css`
          text-decoration: line-through;
          color: var(--clr-text-done);
        `
      : css`
          color: var(--clr-text);
        `}
`;

const Button = styled(BaseButton)`
  flex: none;

  @media (min-width: 38rem) {
    opacity: 0;

    ${TodoItem}:hover & {
      opacity: 1;
    }
  }
`;

const Actions = styled(Card)`
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 38rem) {
    justify-content: start;

    & > *:nth-child(1),
    & > *:nth-child(3) {
      flex: 1 1 0%;
    }

    & > *:nth-child(3) {
      display: flex;
      justify-content: end;
    }
  }
`;

const Text = styled.p`
  font-size: 0.875rem;
  color: var(--clr-action);
`;

const ClearButton = styled(BaseButton)`
  font-size: 0.875rem;
  color: var(--clr-action);

  &:hover {
    color: var(--clr-action-hover);
  }
`;

const Filters = styled.div<{ $screen: 'mobile' | 'desktop' }>`
  ${(props) =>
    props.$screen === 'desktop'
      ? css`
          display: none;

          @media (min-width: 38rem) {
            display: flex;
            gap: 0.75rem;
          }
        `
      : css`
          background-color: var(--clr-background-card);
          border-radius: 0.375rem;
          padding: 1.125rem 1.5rem;
          display: flex;
          justify-content: center;
          gap: 0.75rem;

          & > button {
            font-size: 1rem;
          }

          @media (min-width: 38rem) {
            display: none;
          }
        `}
`;

const FilterButton = styled(BaseButton)<{ $active?: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) =>
    props.$active ? 'var(--clr-primary)' : 'var(--clr-action)'};

  &:hover {
    color: ${(props) =>
      props.$active ? 'var(--clr-primary)' : 'var(--clr-action-hover)'};
  }
`;

export function TodoItems({
  todos,
  filter,
  onFilter
}: {
  todos: Todo[];
  filter: Filter;
  onFilter: (filter: Filter) => void;
}) {
  const { removeTodo, updateTodo, clearCompletedTodos } = useTodos();

  return (
    <>
      <Wrapper>
        {todos.map((todo) => (
          <TodoItem key={todo.id}>
            <CheckboxInput
              type="checkbox"
              name={`todo-${todo.id}`}
              id={`todo-${todo.id}`}
              defaultChecked={todo.done}
              onChange={(e) => updateTodo(todo.id, { done: e.target.checked })}
            />
            <TodoItemLabel htmlFor={`todo-${todo.id}`} $done={todo.done}>
              {todo.task}
            </TodoItemLabel>
            <Button type="button" onClick={() => removeTodo(todo.id)}>
              <CrossIcon aria-hidden="true" />
              <VisuallyHidden>Remove todo item</VisuallyHidden>
            </Button>
          </TodoItem>
        ))}
        <Actions>
          <Text>
            {todos.length} {todos.length === 1 ? 'item' : 'items'} left
          </Text>
          <Filters $screen="desktop">
            <FilterButton
              $active={filter === 'all'}
              onClick={() => onFilter('all')}>
              All
            </FilterButton>
            <FilterButton
              $active={filter === 'active'}
              onClick={() => onFilter('active')}>
              Active
            </FilterButton>
            <FilterButton
              $active={filter === 'completed'}
              onClick={() => onFilter('completed')}>
              Completed
            </FilterButton>
          </Filters>
          <ClearButton type="button" onClick={() => clearCompletedTodos()}>
            Clear completed
          </ClearButton>
        </Actions>
      </Wrapper>

      <Filters $screen="mobile">
        <FilterButton
          $active={filter === 'all'}
          onClick={() => onFilter('all')}>
          All
        </FilterButton>
        <FilterButton
          $active={filter === 'active'}
          onClick={() => onFilter('active')}>
          Active
        </FilterButton>
        <FilterButton
          $active={filter === 'completed'}
          onClick={() => onFilter('completed')}>
          Completed
        </FilterButton>
      </Filters>
    </>
  );
}
