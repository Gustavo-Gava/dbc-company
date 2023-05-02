import { type PropsWithChildren } from "react";

export const TextHighlighted = ({ children }: PropsWithChildren) => {
  return <span className="font-semibold text-primary">{children}</span>;
};
