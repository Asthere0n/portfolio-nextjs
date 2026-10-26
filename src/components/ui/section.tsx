import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /** Anchor id so sections can be linked to directly. */
  id?: string;
  /** Extra classes merged with the default section styling. */
  className?: string;
}

/**
 * Semantic section wrapper with a consistent vertical rhythm.
 * Gives every major block on the page the same spacing contract.
 */
export function Section({
  children,
  id,
  className,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative w-full py-16 md:py-24", className)}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
