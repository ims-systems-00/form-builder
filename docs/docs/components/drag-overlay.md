---
sidebar_position: 3
title: DragOverLay
---

# DragOverLay

The `DragOverLay` component visually indicates where new elements can be dropped.

```tsx
import { DragOverLay } from "lib";
```

## Usage

```tsx
// all your imports....

export function Form() {
  // states api calls and business logic

  return (
    <FormBuilderProvider>
      <FormBoard>
        {/* Form design components go here */}
        <DragOverLay />
      </FormBoard>
  );
}
```
