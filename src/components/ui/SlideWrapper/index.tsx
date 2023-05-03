import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export const SlideWrapper = ({ children, className }: SlideWrapperProps) => {
  return (
    <div className="h-full bg-white dark:bg-[#181a1b] dark:text-white">
      <div
        className={twMerge(
          "m-auto flex h-full max-w-[1400px] flex-col items-center justify-center p-4 lg:flex-row lg:px-12",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
