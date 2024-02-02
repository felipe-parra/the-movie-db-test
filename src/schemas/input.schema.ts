import { z } from "zod";

export const searchFormSchema = z.object({
  searchQuery: z
    .string()
    .min(1, { message: "Must be at least 1 character" })
    .max(10, { message: "Must be less than 10 characters" }),
});

export type SearchFormSchema = z.infer<typeof searchFormSchema>;
