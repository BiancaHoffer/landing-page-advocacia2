import { ComponentProps } from "react";

import { Link as LinkScroll } from "react-scroll";

interface LinkProps extends ComponentProps<'a'> {
  to: string;
  title: string;
}

export function Link({ to, title, ...props }: LinkProps) {
  return (
    //@ts-ignore
    <LinkScroll
      to={to}
      spy={true}
      smooth={true}
      offset={-20}
      duration={1000}
      className="cursor-pointer uppercase border-b-[1px] border-transparent transition-colors hover:border-b-primary"
      {...props}
    >
      {title}
    </LinkScroll>
  )
}