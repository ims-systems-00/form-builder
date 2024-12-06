---
sidebar_position: 5
title: FormDesignRenderer
---

# FormDesignRenderer

The `FormDesignRenderer ` renders the form in "design" mode, allowing users to edit and rearrange elements.

```tsx
import { FormDesignRenderer } from "lib";
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
            <FormDesignRenderer />
        </FormDroppableContainer>
      </FormBoard>
  );
}
```
