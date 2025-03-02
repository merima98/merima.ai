"use client";

import Link from "@/components/ui/Link";

const Header = () => {
  return (
    <div className="flex justify-between p-2 border-b-2 border-b-gray-800">
      <h1 className="font-semibold text-white">merima.io</h1>
      <div>
        <Link href="mailto:merimaceranic98@gmail.com?subject=Hello">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Header;
