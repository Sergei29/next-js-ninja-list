import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  customClassName?: string;
};

const NavLink: React.FC<Props> = ({ href, children, customClassName = "" }) => {
  return (
    <Link href={href}>
      <a className={customClassName}>{children}</a>
    </Link>
  );
};

export default NavLink;
