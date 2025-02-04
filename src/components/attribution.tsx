import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
  color: var(--clr-action);

  a {
    text-decoration: none;
    color: var(--clr-primary);

    &:hover {
      text-decoration: underline;
    }
  }
`;

export function Attribution() {
  return (
    <Wrapper>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href="https://github.com/eljohn316" target="_blank">
        El John Bonga
      </a>
      .
    </Wrapper>
  );
}
