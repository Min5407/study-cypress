"use client";
import { useState } from "react";
import { ComboBox } from "@/components/combo_box";

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

type CompanyType = (typeof frameworks)[number]["value"];
const NavComboBox = () => {
  const [framework, setFramework] = useState<CompanyType>(frameworks[2].value);
  return (
    <ComboBox
      value={framework}
      options={frameworks}
      placeholder="Select Framework..."
      onChange={setFramework}
    />
  );
};

export default NavComboBox;
