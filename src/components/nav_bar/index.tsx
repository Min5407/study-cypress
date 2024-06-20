"use client";
import Image from "next/image";
import React, { useState } from "react";
import { ComboBox } from "../combo_box";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
] as const;
const NavBar = () => {
  const [framework, setFramework] = useState<
    (typeof frameworks)[number]["value"]
  >(frameworks[2].value);
  return (
    <div className="flex h-16 items-center px-4">
      <ComboBox
        value={framework}
        options={frameworks}
        placeholder="Select Framework..."
        onChange={setFramework}
      />
      <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
        <a
          className="text-sm font-medium transition-colors hover:text-primary"
          href="/examples/dashboard"
        >
          Overview
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/examples/dashboard"
        >
          Customers
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/examples/dashboard"
        >
          Products
        </a>
        <a
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          href="/examples/dashboard"
        >
          Settings
        </a>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <div>
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:w-[100px] lg:w-[300px]"
            placeholder="Search..."
            type="search"
          />
        </div>
        <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-8 w-8 rounded-full"
          type="button"
          id="radix-:rtj:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
            <Image
              className="aspect-square h-full w-full"
              alt="@shadcn"
              src="https://avatar.vercel.sh/personal.png"
              width={100}
              height={100}
            />
          </span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
