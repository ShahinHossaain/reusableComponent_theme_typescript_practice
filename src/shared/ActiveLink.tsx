import React, { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ActiveLinkProps {
  to: string;
  children: ReactNode;
}

const ActiveLink = ({ children, to }: ActiveLinkProps) => {
  console.log(children);
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "text-red-500 mr-5 transition duration-200 hover:text-red-700 hover:ease-in-out focus:text-red-700 disabled:text-black/30 motion-reduce:transition-none"
          : "text-neutral-500 mr-5 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none"
      }
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
