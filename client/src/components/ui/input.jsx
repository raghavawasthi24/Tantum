import React from "react";
import { cn } from "../../lib/utils";

const Input = React.forwardRef(
  ({ className, type, leftSection, rightSection, ...props }, ref) => {
    const hasSection = Boolean(leftSection) || Boolean(rightSection);

    return (
      <div
        className={cn(
          "flex items-center justify-center border border-input bg-transparent ring-offset-background autofill:bg-background focus-within:ring-1 focus-within:ring-ring",
          hasSection ? "gap-2" : "",
          props.disabled ? "cursor-not-allowed opacity-50" : ""
        )}
      >
        {leftSection && (
          <div className="text-muted-foreground">{leftSection}</div>
        )}
        <input
          type={type}
          className={cn(
            "flex h-full w-full rounded-md border-none bg-transparent py-2 text-sm shadow-none outline-none placeholder:text-muted-foreground focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none",
            className,
            hasSection ? "px-4" : ""
          )}
          ref={ref}
          {...props}
        />
        {rightSection && (
          <div className="text-muted-foreground">{rightSection}</div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

// const Input3 = React.forwardRef(({ className, type, ...props }, ref) => {
//     return (
//       <input
//         type={type}
//         className={cn(
//           'flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
//           className
//         )}
//         ref={ref}
//         {...props}
//       />
//     );
// });

// Input3.displayName = 'Input3';

// export  Input3;
