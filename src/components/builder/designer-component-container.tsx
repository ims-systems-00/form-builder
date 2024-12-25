import React from "react";
import { cn } from "@/lib/utils";

export const DesignerComponentContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div
    ref={ref}
    className={cn(
      "transition-all duration-300 ease-in-out border-2 border-dashed border-gray-500 p-3 m-1.5 rounded-lg cursor-grab hover:border-blue-500",
      props.className
    )}
    {...props}
  >
    {props.children}
  </div>
));
