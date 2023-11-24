import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> { };

export function Input({ ...props }: InputProps) {
  return (
    <input
      id="input"
      className="pb-4 w-full border-b-[2px] transition-all text-primary border-primary hover:border-b-secondary focus:border-b-secondary"
      {...props}
    />
  )
}