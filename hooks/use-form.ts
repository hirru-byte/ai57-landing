// Reusable form hooks and utilities

import {
  useForm as useReactHookForm,
  type UseFormProps,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type z } from "zod";

/**
 * Custom hook for forms with Zod validation
 * @param schema - Zod schema for validation
 * @param options - Additional react-hook-form options
 */
export function useFormWithValidation<T extends z.ZodType>(
  schema: T,
  options?: Omit<UseFormProps<z.infer<T>>, "resolver">
) {
  return useReactHookForm<z.infer<T>>({
    resolver: zodResolver(schema),
    mode: "onChange", // Validate on change for better UX
    ...options,
  });
}
