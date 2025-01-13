import { AnyValidJSObject, FormElementInstance } from "../form-elements/types";

export function ResponseState({
  name,
  value,
}: {
  name: string;
  value: { response: AnyValidJSObject, element: FormElementInstance };
}) {
  return <input className="hidden" name={name} value={JSON.stringify(value)} />;
}
