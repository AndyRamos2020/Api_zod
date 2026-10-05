import express from 'express';
import { z } from 'zod';
import { id } from 'zod/locales';

const userSchema = z.object({
  id: z.number().int().positive(),
  username: z.string().min(3),
  email: z.string().email(),
  age: z.number().optional()
});

export default userSchema;