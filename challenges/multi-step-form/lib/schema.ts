import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, { message: 'This field is required' }),
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Invalid email format' }),
  phoneNumber: z.string().min(1, { message: 'This field is required' }),
  plan: z.enum(['arcade', 'advanced', 'pro']).default('arcade'),
  billing: z.boolean().default(false).optional(),
  addOns: z.string().array()
});

export type TFormSchema = z.infer<typeof formSchema>;
