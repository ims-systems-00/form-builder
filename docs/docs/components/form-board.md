---
sidebar_position: 1
title: FormBoard
---

# FormBoard

The `FormBoard` component acts as the main container for form-building activities.

```tsx
import { FormBoard } from "lib";
```

## Usage

```tsx
// all your imports....

export function Form() {
  // states api calls and business logic

  return (
    <FormBuilderProvider>
      <FormBoard>{/* Form design components go here */}</FormBoard>
    </FormBuilderProvider>
  );
}
```

## Available props

| **Prop**   | **Type**          | **Description**                                                       |
| ---------- | ----------------- | --------------------------------------------------------------------- |
| `children` | `React.ReactNode` | React elements or components to be rendered inside the provider.form. |
