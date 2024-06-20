import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <li>
          <Link
            href="/"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/overview"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
