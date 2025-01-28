import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@/providers/theme-provider';

const Header = styled.div`
  :root & {
    --bg-image-mobile-url: url('/src/assets/bg-mobile-light.jpg');
    --bg-image-desktop-url: url('/src/assets/bg-desktop-light.jpg');
  }
  :root[data-theme='dark'] & {
    --bg-image-mobile-url: url('/src/assets/bg-mobile-dark.jpg');
    --bg-image-desktop-url: url('/src/assets/bg-desktop-dark.jpg');
  }

  background-image: var(--bg-image-mobile-url);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0;
  max-height: 15rem;
  z-index: -10;

  @media (min-width: 38rem) {
    max-height: 18rem;
    background-image: var(--bg-image-desktop-url);
    background-size: cover;
  }
`;

const MaxwidthWrapper = styled.div`
  max-width: 40rem;
  margin: 0 auto;
  padding: 3rem 1.5rem;

  @media (min-width: 38rem) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Header />
      <MaxwidthWrapper>{children}</MaxwidthWrapper>
    </ThemeProvider>
  );
}
