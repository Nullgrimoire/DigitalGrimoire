import React from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-purple-300 font-pixel text-xs md:text-sm px-6 py-4 fixed top-0 w-full z-50 shadow-md border-b border-purple-600">
      <div className="max-w-6xl mx-auto flex justify-center">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          <li>
            <HashLink smooth to="/#hero" className="hover:text-white transition">
              🧙 Hero
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" className="hover:text-white transition">
              📜 Tome
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" className="hover:text-white transition">
              🗡 Scroll
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" className="hover:text-white transition">
              ✉️ Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
