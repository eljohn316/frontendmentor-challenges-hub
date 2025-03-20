import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useCurrentStep } from '@/hooks/use-current-step';

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

export function StepsIndicatorMobile() {
  const { currentStep } = useCurrentStep();

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
}

export function StepsIndicatorDesktop() {
  const { currentStep } = useCurrentStep();

  return (
    <div className="relative hidden lg:block lg:h-[35.5rem] lg:w-[17.125rem] lg:flex-none">
      <Image
        src="/images/bg-sidebar-desktop.svg"
        alt="Desktop sidebar background"
        className="object-cover"
        fill
        priority
      />
      <div className="absolute inset-0 z-10 flex flex-col gap-y-8 px-8 py-10">
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
    </div>
  );
}
