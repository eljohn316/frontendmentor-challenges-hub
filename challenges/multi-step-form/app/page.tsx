'use client';

import { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, TFormSchema } from '@/lib/schema';
import { useCurrentStep } from '@/hooks/use-current-step';
import {
  StepsIndicatorDesktop,
  StepsIndicatorMobile
} from '@/components/steps-indicator';
import { FormFieldsWrapper } from '@/components/form-fields-wrapper';
import { FormActionsWrapper } from '@/components/form-actions-wrapper';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import {
  PlanRadioGroupInput,
  PlanRadioGroupInputItem
} from '@/components/plan-radio-group-input';
import { BillingOptionLabel } from '@/components/billing-option-label';
import { Attribution } from '@/components/attribution';
import { AddonsCheckboxInput } from '@/components/add-ons-checkbox-input';
import { ADD_ONS, PLANS } from '@/constants';
import Image from 'next/image';

function PersonalInfoFields() {
  const form = useFormContext<TFormSchema>();

  return (
    <>
      <div className="space-y-2 lg:space-y-3">
        <h2 className="text-primary-marine-blue text-2xl font-bold lg:text-[2rem]">
          Personal info
        </h2>
        <p className="text-neutral-cool-gray text-base">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="mt-[1.375rem] space-y-4 lg:mt-10 lg:space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative space-y-1 lg:space-y-2">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Stephen King" {...field} />
              </FormControl>
              <FormMessage className="absolute -top-1.5 right-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="relative space-y-1 lg:space-y-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute -top-1.5 right-0" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem className="relative space-y-1 lg:space-y-2">
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="e.g. +1 234 567 890" {...field} />
              </FormControl>
              <FormMessage className="absolute -top-1.5 right-0" />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}

function PlanSelectionFields() {
  const form = useFormContext<TFormSchema>();

  return (
    <>
      <div className="space-y-2 lg:space-y-3">
        <h2 className="text-primary-marine-blue text-2xl font-bold lg:text-[2rem]">
          Select your plan
        </h2>
        <p className="text-neutral-cool-gray text-base">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <div className="mt-[1.375rem] lg:mt-10">
        <FormField
          control={form.control}
          name="plan"
          render={({ field }) => (
            <FormItem className="mt-[1.375rem] lg:mt-10">
              <PlanRadioGroupInput
                onValueChange={field.onChange}
                defaultValue={field.value}>
                <FormItem className="w-full space-y-3 lg:flex lg:space-y-0 lg:gap-x-[1.125rem]">
                  <FormControl>
                    <PlanRadioGroupInputItem value="arcade" />
                  </FormControl>
                  <FormControl>
                    <PlanRadioGroupInputItem value="advanced" />
                  </FormControl>
                  <FormControl>
                    <PlanRadioGroupInputItem value="pro" />
                  </FormControl>
                </FormItem>
              </PlanRadioGroupInput>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="billing"
          render={({ field }) => (
            <FormItem className="bg-neutral-alabaster mt-6 flex justify-center gap-x-6 lg:mt-[38px]">
              <BillingOptionLabel option="monthly">Monthly</BillingOptionLabel>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <BillingOptionLabel option="yearly">Yearly</BillingOptionLabel>
            </FormItem>
          )}
        />
      </div>
    </>
  );
}

function AddonsSelectionFields() {
  const form = useFormContext<TFormSchema>();

  return (
    <>
      <div className="space-y-2 lg:space-y-3">
        <h2 className="text-primary-marine-blue text-2xl font-bold lg:text-[2rem]">
          Pick add-ons
        </h2>
        <p className="text-neutral-cool-gray text-base">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="mt-[1.375rem] space-y-3 lg:mt-10 lg:space-y-4">
        <FormField
          control={form.control}
          name="addOns"
          render={() => (
            <FormItem className="space-y-3 lg:space-y-4">
              <FormField
                control={form.control}
                name="addOns"
                render={({ field }) => (
                  <FormControl>
                    <AddonsCheckboxInput
                      value="online-service"
                      checked={field.value.includes('online-service')}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...field.value, 'online-service'])
                          : field.onChange(
                              field.value.filter(
                                (val) => val !== 'online-service'
                              )
                            )
                      }
                    />
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="addOns"
                render={({ field }) => (
                  <FormControl>
                    <AddonsCheckboxInput
                      value="larger-storage"
                      checked={field.value.includes('larger-storage')}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([...field.value, 'larger-storage'])
                          : field.onChange(
                              field.value.filter(
                                (val) => val !== 'larger-storage'
                              )
                            )
                      }
                    />
                  </FormControl>
                )}
              />
              <FormField
                control={form.control}
                name="addOns"
                render={({ field }) => (
                  <FormControl>
                    <AddonsCheckboxInput
                      value="customizable-profile"
                      checked={field.value.includes('customizable-profile')}
                      onCheckedChange={(checked) =>
                        checked
                          ? field.onChange([
                              ...field.value,
                              'customizable-profile'
                            ])
                          : field.onChange(
                              field.value.filter(
                                (val) => val !== 'customizable-profile'
                              )
                            )
                      }
                    />
                  </FormControl>
                )}
              />
            </FormItem>
          )}
        />
      </div>
    </>
  );
}

function Summary() {
  const { setCurrentStep } = useCurrentStep();
  const { watch } = useFormContext<TFormSchema>();
  const billing = watch('billing') ? 'yearly' : 'monthly';
  const plan = PLANS[watch('plan')];
  const addons = watch('addOns').map(
    (addOn) => ADD_ONS[addOn as keyof typeof ADD_ONS]
  );

  const total =
    plan.pricing.value(billing) +
    addons.reduce((total, addOn) => total + addOn.pricing.value(billing), 0);

  return (
    <>
      <div className="space-y-2 lg:space-y-3">
        <h2 className="text-primary-marine-blue text-2xl font-bold lg:text-[2rem]">
          Finishing up
        </h2>
        <p className="text-neutral-cool-gray text-base">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="mt-[1.375rem] lg:mt-10">
        <dl className="bg-neutral-alabaster rounded-lg p-4">
          <div className="flex items-center justify-between">
            <dt>
              <p className="text-primary-marine-blue text-sm font-medium lg:text-base">
                {plan.label} (
                {billing.charAt(0).toUpperCase() + billing.slice(1)})
              </p>
              <button
                type="button"
                className="text-neutral-cool-gray hover:text-primary-purple-blue cursor-pointer text-sm underline"
                onClick={() => setCurrentStep(2)}>
                Change
              </button>
            </dt>
            <dd className="text-primary-marine-blue text-sm font-bold lg:text-base">
              {plan.pricing.label(billing)}
            </dd>
          </div>
          {addons.length > 0 && (
            <div className="border-neutral-cool-gray-2 mt-3 space-y-3 border-t pt-3">
              {addons.map((addon) => (
                <div
                  key={addon.label}
                  className="flex items-center justify-between">
                  <dt className="text-neutral-cool-gray text-sm">
                    {addon.label}
                  </dt>
                  <dd className="text-primary-marine-blue text-sm">
                    {addon.pricing.label(billing)}
                  </dd>
                </div>
              ))}
            </div>
          )}
        </dl>
        <div className="mt-6 flex items-center justify-between px-4">
          <div className="text-neutral-cool-gray text-sm">
            Total (per {billing === 'monthly' ? 'month' : 'year'})
          </div>
          <div className="text-primary-purple-blue text-base font-bold lg:text-xl">
            +${total}/{billing === 'yearly' ? 'yr' : 'mo'}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  const [success, setSuccess] = useState(false);
  const { currentStep, setCurrentStep } = useCurrentStep();

  const form = useForm<TFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: 'Stephen King',
      email: 'stephenking@g.com',
      phoneNumber: '123456789',
      plan: 'arcade',
      addOns: []
    }
  });

  function handlePrev() {
    setCurrentStep(currentStep - 1);
  }

  async function handleNext() {
    if (currentStep === 1) {
      const valid = await form.trigger(['name', 'email', 'phoneNumber']);
      if (!valid) return;

      setCurrentStep(currentStep + 1);
    }

    if (currentStep === 2) {
      const valid = await form.trigger(['plan']);
      if (!valid) return;

      setCurrentStep(currentStep + 1);
    }

    if (currentStep === 3) {
      const valid = await form.trigger(['addOns']);
      if (!valid) return;

      setCurrentStep(currentStep + 1);
    }
  }

  function onSubmit() {
    setSuccess(true);
  }

  return (
    <div className="grid min-h-svh grid-rows-[auto_1fr] lg:grid-rows-[1fr_auto] lg:gap-y-8">
      <div className="my-8 lg:hidden">
        <StepsIndicatorMobile />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-y-12 lg:pt-12">
          <div className="flex-1 lg:flex lg:items-center lg:justify-center">
            <div className="mx-auto w-full max-w-lg px-4 lg:max-w-5xl">
              <div className="shadow-main rounded-[0.625rem] bg-white px-6 py-8 lg:flex lg:rounded-[0.9375rem] lg:p-4">
                <StepsIndicatorDesktop />
                <div className="lg:flex lg:flex-1 lg:flex-col lg:px-[6.25rem] lg:pt-10 lg:pb-4">
                  {success ? (
                    <div className="py-20 lg:my-auto lg:justify-self-center lg:py-0">
                      <Image
                        src="/images/icon-thank-you.svg"
                        alt="Thank you icon"
                        height={100}
                        width={100}
                        className="mx-auto size-14 lg:size-20"
                      />
                      <div className="mt-6 space-y-[0.5625rem] text-center lg:mt-8 lg:space-y-3.5">
                        <h2 className="text-primary-marine-blue text-2xl font-bold lg:text-[2rem]">
                          Thank you!
                        </h2>
                        <p className="text-neutral-cool-gray text-base">
                          Thanks for confirming your subscription! We hope you
                          have fun using our platform. If you ever need support,
                          please feel free to email us at
                          support@loremgaming.com.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {currentStep === 1 && (
                        <>
                          <FormFieldsWrapper>
                            <PersonalInfoFields />
                          </FormFieldsWrapper>
                          <FormActionsWrapper>
                            <Button
                              type="button"
                              variant="primary"
                              onClick={handleNext}
                              className="ml-auto">
                              Next Step
                            </Button>
                          </FormActionsWrapper>
                        </>
                      )}
                      {currentStep === 2 && (
                        <>
                          <FormFieldsWrapper>
                            <PlanSelectionFields />
                          </FormFieldsWrapper>
                          <FormActionsWrapper>
                            <Button variant="ghost" onClick={handlePrev}>
                              Go Back
                            </Button>
                            <Button
                              type="button"
                              variant="primary"
                              onClick={handleNext}
                              className="ml-auto">
                              Next Step
                            </Button>
                          </FormActionsWrapper>
                        </>
                      )}
                      {currentStep === 3 && (
                        <>
                          <FormFieldsWrapper>
                            <AddonsSelectionFields />
                          </FormFieldsWrapper>
                          <FormActionsWrapper>
                            <Button variant="ghost" onClick={handlePrev}>
                              Go Back
                            </Button>
                            <Button
                              type="button"
                              variant="primary"
                              onClick={handleNext}
                              className="ml-auto">
                              Next Step
                            </Button>
                          </FormActionsWrapper>
                        </>
                      )}
                      {currentStep === 4 && (
                        <>
                          <FormFieldsWrapper>
                            <Summary />
                          </FormFieldsWrapper>
                          <FormActionsWrapper>
                            <Button variant="ghost" onClick={handlePrev}>
                              Go Back
                            </Button>
                            <Button
                              type="submit"
                              variant="secondary"
                              className="ml-auto">
                              Confirm
                            </Button>
                          </FormActionsWrapper>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          {!success && (
            <div className="flex-none bg-white py-4 lg:hidden">
              <div className="mx-auto flex max-w-lg px-4">
                {currentStep === 1 && (
                  <Button
                    type="button"
                    variant="primary"
                    onClick={handleNext}
                    className="ml-auto">
                    Next Step
                  </Button>
                )}
                {currentStep === 2 && (
                  <>
                    <Button variant="ghost" onClick={handlePrev}>
                      Go Back
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleNext}
                      className="ml-auto">
                      Next Step
                    </Button>
                  </>
                )}
                {currentStep === 3 && (
                  <>
                    <Button variant="ghost" onClick={handlePrev}>
                      Go Back
                    </Button>
                    <Button
                      type="button"
                      variant="primary"
                      onClick={handleNext}
                      className="ml-auto">
                      Next Step
                    </Button>
                  </>
                )}
                {currentStep === 4 && (
                  <>
                    <Button variant="ghost" onClick={handlePrev}>
                      Go Back
                    </Button>
                    <Button
                      type="submit"
                      variant="secondary"
                      className="ml-auto">
                      Confirm
                    </Button>
                  </>
                )}
              </div>
            </div>
          )}
        </form>
      </Form>
      <Attribution className="hidden lg:flex lg:justify-center" />
    </div>
  );
}
