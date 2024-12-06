---
sidebar_position: 0
title: FormBuilderProvider
---

# FormBuilderProvider

The `FormBuilderProvider` component is the foundation of the form-builder package. It provides the necessary context and utilities to enable the form-building experience.

```tsx
import { FromBuilderProvider } from "lib";
```

## Usage

Wrap your form container with the `FormBuilderProvider` to access its features:

```tsx
// all your imports....

export function Form() {
  // states api calls and business logic

  return (
    <FormBuilderProvider>
      {/* Form design components go here */}
    </FormBuilderProvider>
  );
}
```

## Available props

| **Prop**                   | **Type**                                           | **Description**                                                              |
| -------------------------- | -------------------------------------------------- | ---------------------------------------------------------------------------- |
| `children`                 | `React.ReactNode`                                  | React elements or components to be rendered inside the provider.form.        |
| `elements`                 | `FormElementInstance[]`                            | Default elements to render in the form.                                      |
| `onDroppedANewElement`     | `(event: { element: FormElementInstance; ... })`   | Callback triggered when a new element is dropped into the form.              |
| `onElementAttributesSaved` | `(event: { elementId: string; attributes: {...}})` | Callback triggered when attributes of an element are saved.                  |
| `onElementOrderChanged`    | `(event: { element: FormElementInstance; ... })`   | Callback triggered when the order of elements is changed.                    |
| `onElementRemoved`         | `(event: { element: FormElementInstance; ... })`   | Callback triggered when an element is removed from the form.                 |
| `googleApiKey`             | `string`                                           | API key for Google integrations (required for location component, optional). |

### Refer to the accepted types better understanding

```tsx
export type FormBuilderProviderProps = {
  children?: React.ReactNode;
  elements?: FormElementInstance[];
  onDroppedANewElement?: (event: {
    element: FormElementInstance;
    beforeElementId?: string | null;
    afterElementId?: string | null;
  }) => void;
  onElementAttributesSaved?: (event: {
    elementId: string;
    attributes?: Record<string, unknown>;
    afterElementId?: string | null;
  }) => void;
  onElementOrderChanged?: (event: {
    element: FormElementInstance;
    beforeElementId?: string | null;
    afterElementId?: string | null;
  }) => void;
  onElementRemoved?: (event: {
    element: FormElementInstance;
    beforeElementId?: string | null;
    afterElementId?: string | null;
  }) => void;
  googleApiKey?: string;
};
```
