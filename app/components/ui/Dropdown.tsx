
"use client";

import Link from "next/link";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
}

const Dropdown = ({ title, items }: DropdownProps) => {
  return (
    <li className="relative group">
      <button className="hover:text-blue-600 transition">
        {title}
      </button>

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
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Dropdown;