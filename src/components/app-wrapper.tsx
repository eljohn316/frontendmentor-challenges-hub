import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from '@/providers/theme-provider';

const BaseHeader = styled.div`
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  inset: 0;
  max-height: 15rem;
  z-index: -10;

  @media (min-width: 38rem) {
    max-height: 18rem;
    background-size: cover;
  }
`;

const LighThemeHeader = styled(BaseHeader)`
  :root[data-theme='dark'] & {
    opacity: 0;
    scale: 0;
  }

  background-image: url('/bg-mobile-light.jpg');

  @media (min-width: 38rem) {
    background-image: url('/bg-desktop-light.jpg');
  }
`;

const DarkThemeHeader = styled(BaseHeader)`
  opacity: 0;
  scale: 0;

  :root[data-theme='dark'] & {
    opacity: 1;
    scale: 1;

    background-image: url('/bg-mobile-dark.jpg');

    @media (min-width: 38rem) {
      background-image: url('/bg-desktop-dark.jpg');
    }
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
      <LighThemeHeader />
      <DarkThemeHeader />
      <MaxwidthWrapper>{children}</MaxwidthWrapper>
    </ThemeProvider>
  );
}
