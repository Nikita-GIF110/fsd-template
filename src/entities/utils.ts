import type { FormApi, SubmissionErrors } from "final-form";

export type Nullable<T> = T | null;

export type OnSubmitForm<FormValues> = (
  values: FormValues,
  form: FormApi<FormValues, Partial<FormValues>>,
  callback?: (errors?: SubmissionErrors) => void
) => SubmissionErrors | Promise<SubmissionErrors> | void;
