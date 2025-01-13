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
import { useState } from "react";
import { ResponseState } from "@/components/builder/response-state";
export type DesignerProps = {
  formElement: FormElementInstance;
  onResponse?: OnResponseFunction;
};

type Custom = FormElementInstance & {
  attributes: Attributes;
};
export function Response({ formElement, onResponse }: DesignerProps) {
  const element = formElement as Custom;
  const attributes = element.attributes;
  const form = useForm();
  const [state, setState] = useState<string>("");
  return (
    <Form {...form}>
      <FormItem>
        <FormLabel>
          {attributes.label}{" "}
          {attributes.required && <span className="text-red-500">*</span>}
        </FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder={attributes.placeholder}
            onChange={(e) => {
              setState(e.target.value);
              onResponse?.(formElement, e.target.value);
            }}
          />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
      </FormItem>
      <ResponseState name={element.id} value={{ response: state, element }} />
    </Form>
  );
}
/**
 * 
 * POST - /api/forms/:id/submissions/ { parameters: { id: string, userdid  } } 2 models formreponses, formsubmission
 * { body: { responses: [ { elementid: 'a123', reponse: mixedObject } ] } }
 * - create a submission record new Submission()
 * - create all repsonses, Model.insertMany([{ elementid: 'a123', reponse: mixedObject }])
 * - save submission
 * PUT - /api/forms/:id/submissions/:submissionid { update submission }
 * GET - /api/forms/:id/submissions/:submissionid { list responses, submissions }
 * GET - /api/forms/:id/submissions { list submissions }
 * DELETE - /api/forms/:id/submissions/:submissionid { delete submission } { deleten responses and submissioid }
 * 
 */