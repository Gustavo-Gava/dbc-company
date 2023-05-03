import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextHighlightedProps {
  children: ReactNode;
  className?: string;
}

export const TextHighlighted = ({
  children,
  className,
}: TextHighlightedProps) => {
  return (
    <span className={twMerge("font-semibold text-primary", className)}>
      {children}
    </span>
  );
};
