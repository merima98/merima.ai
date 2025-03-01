"use client";

import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react";

export interface SocialNetworksProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  link: string;
}

const SocialNetworks = forwardRef<HTMLDivElement, SocialNetworksProps>(
  ({ children, link, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        {...rest}
        className="flex w-full justify-center align-center p-5 border-2 border-gray-800 rounded-lg w-full cursor-pointer items-center"
        onClick={() => window.open(link, "_blank")}
      >
        {children}
      </div>
    );
  }
);

SocialNetworks.displayName = "SocialNetworks";

export default SocialNetworks;
