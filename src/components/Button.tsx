import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <button className="w-fit md:self-center min-w-[200px] bg-secondary hover:bg-primary transition-colors shadow-lg text-lg text-white rounded-full px-10 py-4 font-light" {...props}>
      {title}
    </button>
  )
}