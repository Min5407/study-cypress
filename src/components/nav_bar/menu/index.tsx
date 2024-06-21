import Link from "next/link";
import React from "react";

const Menu = () => {
  return (
    <nav>
      <ul className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <li>
          <Link
            href="/"
            data-cy="home-link"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/overview"
            data-cy="overview-link"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Overview
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            data-cy="about-link"
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
