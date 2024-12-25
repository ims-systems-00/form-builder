import { z } from "zod";

export type Attributes = {
  label: string;
  placeholder: string;
  subLabel: string;
  required: boolean;
};

export const attributes: Attributes = {
  label: "[Field Label]",
  placeholder: "[Place holder]",
  subLabel: "[Helper text about this field]",
  required: true,
};

export const attributeValidationSchema = z.object({
  label: z.string({
    required_error: "Label is required",
  }),
  placeholder: z.string({
    required_error: "Placeholder is required",
  }),
  subLabel: z.string({
    required_error: "Sub Label is required",
  }),
  required: z.boolean(),
});

// You can also infer the type from the schema if needed
export type AttributesattributeValidationSchema = z.infer<typeof attributeValidationSchema>;