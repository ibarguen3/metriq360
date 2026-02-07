"use client";

import { useState } from "react";
import Link from "next/link";

interface DropdownProps {
  title: string;
  items: string[];
}

const Dropdown = ({ title, items }: DropdownProps) => {
  return (
    <li className="relative group">
      {/* BOTÓN */}
      <button className="hover:text-blue-600 transition">
        {title}
      </button>

      {/* MENÚ */}
      <ul
        className="
          absolute left-0 top-full mt-3 w-64
          rounded-xl border bg-white shadow-lg p-2
          invisible opacity-0
          transition-all duration-200
          group-hover:visible group-hover:opacity-100
        "
      >
        {items.map((item) => (
          <li key={item}>
            <Link
              href="#"
              className="block rounded px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;
