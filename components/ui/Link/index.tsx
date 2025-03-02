"use client";

import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon?: string;
}

const Link = (props: LinkProps) => {
  const { children, href } = props;
  return (
    <a className="cursor-pointer text-white" href={href}>
      {children}
    </a>
  );
};

export default Link;
