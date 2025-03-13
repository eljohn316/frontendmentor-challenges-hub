import { useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

const STEPS = [
  {
    num: 1,
    label: 'Your info'
  },
  {
    num: 2,
    label: 'Select plan'
  },
  {
    num: 3,
    label: 'Add-ons'
  },
  {
    num: 4,
    label: 'Summary'
  }
] as const;

interface StepsProps {
  view: 'sm' | 'lg';
}

export function Steps({ view }: StepsProps) {
  const searchParams = useSearchParams();
  const stepParams = searchParams.get('step');
  const currentStep = stepParams ? +stepParams : 1;

  if (view === 'sm')
    return (
      <div className="flex justify-center gap-x-4 lg:hidden">
        {STEPS.map((step) => (
          <div
            key={step.num}
            className={cn(
              currentStep === step.num
                ? 'bg-primary-light-blue text-primary-marine-blue border-primary-light-blue'
                : 'border-white text-white',
              'flex size-8 items-center justify-center rounded-full border text-sm leading-0 font-bold'
            )}>
            {step.num}
          </div>
        ))}
      </div>
    );

  return (
    <div className="hidden lg:flex lg:flex-col lg:gap-y-8">
      {STEPS.map((step) => (
        <div key={step.num} className="flex items-center gap-x-4">
          <div
            className={cn(
              currentStep === step.num
                ? 'bg-primary-light-blue text-primary-marine-blue border-primary-light-blue'
                : 'border-white text-white',
              'flex size-8 items-center justify-center rounded-full border text-sm leading-0 font-bold'
            )}>
            {step.num}
          </div>
          <div className="space-y-1">
            <p className="text-primary-pastel-blue text-xs leading-none uppercase">
              Step {step.num}
            </p>
            <p className="text-sm leading-none font-bold tracking-[1px] text-white uppercase">
              {step.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
