---
sidebar_position: 4
title: FormDroppableContainer
---

# FormDroppableContainer

The `FormDroppableContainer` is a wrapper component that enables drag-and-drop functionality for form elements.

```tsx
import { FormDroppableContainer } from "lib";
```

## Usage

```tsx
// all your imports....

export function Form() {
  // states api calls and business logic

  return (
    <FormBuilderProvider>
      <FormBoard>
        <FormDroppableContainer>
            {/* Drop-enabled area */}
        </FormDroppableContainer>
      </FormBoard>
  );
}
```
