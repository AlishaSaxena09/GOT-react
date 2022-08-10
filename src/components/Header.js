import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NAV_LINKS } from "../utils/constants";
export default function Header() {
  return (
    <nav className="flex justify-between flex-wrap p-6 shadow-xl items-center">
      <div className="w-80">
        <Link to="/">
          <img alt="got" src="/images/got-logo.jpeg"></img>
        </Link>
      </div>
      <ul className="flex mr-8 font-cinzel ">
        {NAV_LINKS.map(({ path, label }) => {
          return (
            <NavLink to={path}>
              <li className="border-b-2 border-transparent mr-8 text-lg font-medium hover:border-gray-400 ">
                {label}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </nav>
  );
}
