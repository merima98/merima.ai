import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  icon?: any; // Type will be changed. I'll add option that link can have icon.
}

const Link = (props: LinkProps) => {
  const { children } = props;
  return <a className="cursor-pointer text-white">{children}</a>;
};

export default Link;
