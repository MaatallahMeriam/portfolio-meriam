"use client";

import { useState, useEffect } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },

  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const [active, setActive] = useState("home");

  // scroll spy
  useEffect(() => {
    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && window.scrollY >= element.offsetTop - 200) {
          current = section.id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed left-0 top-0 h-screen w-48 px-6 py-10 
      bg-darker border-r border-white/10 hidden md:flex flex-col gap-6">

      <h2 className="text-xl font-bold mb-4 text-primary">Portfolio</h2>

      <nav className="flex flex-col gap-4">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`text-sm transition-all ${
              active === s.id
                ? "text-primary font-semibold"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
