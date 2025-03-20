'use client';

import * as React from 'react';

export type StepsContext = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

export const StepsContext = React.createContext<StepsContext | null>(null);

export function Providers({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <StepsContext value={{ currentStep, setCurrentStep }}>
      {children}
    </StepsContext>
  );
}
