import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormElementInstance, OnAttributeSaveFunction } from "../types";
import { Attributes, attributeValidationSchema } from "./attributes";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export type DesignerProps = {
  formElement: FormElementInstance;
  onAttributeSave?: OnAttributeSaveFunction;
};

type ThisElementInstance = FormElementInstance & {
  attributes: Attributes;
};
export function Properties({ formElement, onAttributeSave }: DesignerProps) {
  const element = formElement as ThisElementInstance;
  const attributes = element.attributes;
  const form = useForm<Attributes>({
    resolver: zodResolver(attributeValidationSchema),
    defaultValues: {
      ...attributes,
    },
    mode: "all",
  });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          if (typeof onAttributeSave === "function") {
            onAttributeSave(formElement.id, values);
          }
        })}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Question/Label</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                This text will be displayed at the top of the input field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="placeholder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hint/Placeholder"</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                This text will be displayed as a hint in the input field
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helper Text/Sub-Label"</FormLabel>
              <FormControl>
                <Input type="text" {...field} />
              </FormControl>
              <FormDescription>
                This text will be displayed at the bottom of the input field"
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Required Field</FormLabel>
                <FormDescription>
                  Make this field mandatory for form submission
                </FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Save
        </Button>{" "}
      </form>
    </Form>
  );
}
