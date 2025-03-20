import * as React from 'react';
import { useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { TFormSchema } from '@/lib/schema';
import { ADD_ONS } from '@/constants';

type AddonsCheckboxInputProps = React.ComponentProps<typeof Checkbox> & {
  value: keyof typeof ADD_ONS;
};

export function AddonsCheckboxInput({
  value,
  ...props
}: AddonsCheckboxInputProps) {
  const { watch } = useFormContext<TFormSchema>();
  const billing = watch('billing') ? 'yearly' : 'monthly';

  return (
    <label className="border-neutral-light-gray hover:border-primary-purple-blue has-checked:border-primary-purple-blue flex cursor-pointer items-center gap-x-4 rounded-lg border px-4 py-3 lg:gap-x-6 lg:px-6 lg:py-4">
      <Checkbox
        className="border-neutral-light-gray checked:bg-primary-purple-blue size-5 shrink-0 rounded-sm focus:ring-0 focus:ring-offset-0 active:ring-0"
        name="add-ons"
        value={value}
        {...props}
      />
      <div className="flex-1 space-y-1">
        <p className="text-primary-marine-blue text-sm font-medium lg:text-base">
          {ADD_ONS[value as keyof typeof ADD_ONS].label}
        </p>
        <p className="text-neutral-cool-gray text-xs lg:text-[15px]">
          {ADD_ONS[value as keyof typeof ADD_ONS].description}
        </p>
      </div>
      <div className="text-primary-purple-blue shrink-0 text-xs lg:text-[15px]">
        {ADD_ONS[value as keyof typeof ADD_ONS].pricing.label(billing)}
      </div>
    </label>
  );
}
