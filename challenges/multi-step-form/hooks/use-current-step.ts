import { use } from 'react';
import { StepsContext } from '@/app/providers';

export function useCurrentStep() {
  const context = use(StepsContext);

  if (!context)
    throw new Error(
      'useCurrentStep hook must be used within <Providers /> component'
    );

  return context;
}
