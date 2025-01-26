import styled from 'styled-components';
import { forwardRef } from 'react';
import { Card } from '@/components/card';
import { CheckboxInput } from '@/components/checkbox';

const Form = styled(Card)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  input[type='checkbox'] {
    flex: none;
  }

  input[type='text'] {
    flex: 1 1 auto;
  }

  @media (min-width: 38rem) {
    gap: 1.125rem;
  }
`;

const Input = styled.input.attrs({ type: 'text' })`
  display: block;
  width: 100%;
  font-family: inherit;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  color: var(--clr-text);

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--clr-placeholder-text);
  }
`;

export const TodoForm = forwardRef<HTMLFormElement>(function TodoForm(
  props,
  ref
) {
  return (
    <Form as="form" {...props} ref={ref} {...props}>
      <CheckboxInput type="checkbox" name="done" id="done" />
      <Input
        type="text"
        name="todo"
        id="todo"
        placeholder="Create a new todo..."
      />
    </Form>
  );
});
