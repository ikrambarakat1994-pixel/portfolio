"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container nav">
        <a href="#home" className="logo" aria-label="Go to top">
          Yamen<span>Barakat</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <ul id="site-navigation" className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
