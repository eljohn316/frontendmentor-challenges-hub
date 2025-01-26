import styled from 'styled-components';
import { useTheme } from '@/hooks/use-theme';
import { MoonIcon, SunIcon } from '@/components/icons';
import { VisuallyHidden } from '@/components/visually-hidden';
import { BaseButton } from '@/components/base-button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.325em;
  line-height: normal;

  @media (min-width: 38rem) {
    font-size: 2.25rem;
  }
`;

export function TodoHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <Wrapper>
      <Title>Todo</Title>
      {theme === 'light' ? (
        <BaseButton onClick={() => setTheme('dark')}>
          <MoonIcon aria-hidden="true" />
          <VisuallyHidden>Toggle dark mode</VisuallyHidden>
        </BaseButton>
      ) : (
        <BaseButton onClick={() => setTheme('light')}>
          <SunIcon aria-hidden="true" />
          <VisuallyHidden>Toggle light mode</VisuallyHidden>
        </BaseButton>
      )}
    </Wrapper>
  );
}
