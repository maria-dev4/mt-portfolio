"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  ["About", "/#about"],
  ["Skills", "/#skills"],
  ["Projects", "/#projects"],
  ["Education", "/#education"],
  ["Contact", "/#contact"],
  ["Resume", "/#resume"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap navbar">
        <Link href="/" className="brand">Maria</Link>
        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav className={open ? "links open" : "links"}>
          {links.map(([label, href]) => (
            <Link key={label} href={href} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
