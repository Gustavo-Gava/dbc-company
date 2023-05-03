import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SlideWrapper = ({ children, className }: SlideWrapperProps) => {
  return (
    <div
      className={twMerge(
        "flex h-full flex-col items-center justify-center p-4 lg:flex-row lg:px-12",
        className
      )}
    >
      {children}
    </div>
  );
};
