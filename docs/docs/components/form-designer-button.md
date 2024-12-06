---
sidebar_position: 2
title: FormDesignerButton
---

# FormDesignerButton

The `FormDesignerButton` is a utility for adding form elements to the design area.

```tsx
import { FormDesignerButton } from "lib";
```

## Usage

```tsx
// all your imports....

export function Form() {
  // states api calls and business logic

  return (
    <FormBuilderProvider>
      <FormBoard>
        <FormDesignerButton
          shape="square"
          formElement={FormElements.TextInput.construct("unique-id")}
        />
        ;
      </FormBoard>
    </FormBuilderProvider>
  );
}
```

## Available props

| **Prop**      | **Type**        | **Description**                       |
| ------------- | --------------- | ------------------------------------- |
| `shape`       | string          | Shape of the button (e.g., "square"). |
| `formElement` | FormElementType | The element to add to the form.       |
