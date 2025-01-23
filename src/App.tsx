import styled from 'styled-components';
import { MoonIcon } from '@/components/icons';
import { Card } from '@/components/card';
import { Checkbox } from '@/components/checkbox';

const Header = styled.header`
  position: absolute;
  inset: 0;
  height: 320px;
  background-image: url('/src/assets/bg-desktop-light.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -10;
`;

const TodoWrapper = styled.div`
  max-width: 36rem;
  margin: 4.5rem auto;
  padding-left: 28px;
  padding-right: 28px;
`;

const TodoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 32px;
  letter-spacing: 0.25em;
  color: white;

  @media (min-width: 625px) {
    font-size: 40px;
  }
`;

const ThemeIcon = styled(MoonIcon)`
  fill: white;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #aaa;
  }
`;

const TodoCard = styled(Card)`
  margin-bottom: 1.725rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;

  & > *:nth-child(1) {
    flex: none;
  }
  & > *:nth-child(2) {
    flex: auto;
  }
`;

const TodoItemsCard = styled(Card)`
  padding: 0;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

  & > *:not(:last-child) {
    border-bottom: 1px solid hsl(236, 33%, 92%);
  }
`;

const TodoItem = styled.div`
  padding: 1.125rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > div {
    flex: none;
  }

  & > p {
    color: hsl(235, 19%, 35%);
  }
`;

const TodoActions = styled.div`
  padding: 1.125rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  & > *:nth-child(1),
  & > *:nth-child(3) {
    flex: 1 1 0%;
  }

  & > *:nth-child(3) {
    display: flex;
    justify-content: end;
  }
`;

const P = styled.p`
  font-size: 0.875rem;
  color: hsl(236, 9%, 61%);
`;

const TodoFilterActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
`;

const TodoFilterButton = styled.button<{ $active?: boolean }>`
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) =>
    props.$active ? 'hsl(220, 98%, 61%)' : 'hsl(236, 9%, 61%)'};

  &:hover {
    color: ${(props) =>
      props.$active ? 'hsl(220, 98%, 61%)' : 'hsl(235, 19%, 35%)'};
  }
`;

const ClearButton = styled.button`
  display: inline-block;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.875rem;
  color: hsl(236, 9%, 61%);

  &:hover {
    color: hsl(235, 19%, 35%);
  }
`;

function App() {
  return (
    <>
      <Header />
      <TodoWrapper>
        <TodoHeader>
          <Title>TODO</Title>
          <ThemeIcon />
        </TodoHeader>

        <TodoCard>
          <Checkbox />
          <Input
            type="text"
            name="item"
            id="item"
            placeholder="Create a new todo..."
          />
        </TodoCard>

        <TodoItemsCard>
          <TodoItem>
            <Checkbox />
            <p>Complete online JavaScript course</p>
          </TodoItem>
          <TodoItem>
            <Checkbox />
            <p>Jog around the park 3x</p>
          </TodoItem>
          <TodoItem>
            <Checkbox />
            <p>10 minutes meditation</p>
          </TodoItem>
          <TodoActions>
            <P>3 items left</P>
            <TodoFilterActions>
              <TodoFilterButton $active>All</TodoFilterButton>
              <TodoFilterButton>Active</TodoFilterButton>
              <TodoFilterButton>Completed</TodoFilterButton>
            </TodoFilterActions>
            <ClearButton>Clear completed</ClearButton>
          </TodoActions>
        </TodoItemsCard>
      </TodoWrapper>
    </>
  );
}

export default App;
