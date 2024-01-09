import { z } from 'zod';

const User = z.object({
  email: z.string().min(4).max(40, "email string must be between 4 and 40 characters"),
  password: z.string().min(9, "Password string must contain 9 characters"),
});

export { User };
