import styled from 'styled-components';
import { AppWrapper } from '@/components/app-wrapper';
import { TodoHeader } from '@/components/todo-header';
import { TodoWrapper } from '@/components/todo-wrapper';
import { Attribution } from '@/components/attribution';

const Wrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr auto;
`;

function App() {
  return (
    <Wrapper>
      <AppWrapper>
        <TodoHeader />
        <TodoWrapper />
      </AppWrapper>
      <Attribution />
    </Wrapper>
  );
}

export default App;
