import { useForm } from "react-hook-form";
import { FormElementInstance, OnResponseFunction } from "../types";
import { Attributes } from "./attributes";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
export type DesignerProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  const form = useForm();
  return (
    <Form {...form}>
      <FormItem>
        <FormLabel>
          {attributes.label}{" "}
          {attributes.required && <span className="text-red-500">*</span>}
        </FormLabel>
        <FormControl>
          <Input type="text" placeholder={attributes.placeholder} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
      </FormItem>
    </Form>
  );
}
