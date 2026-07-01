"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

          <Link
            href="/"
            className="text-2xl hover:-translate-y-1 transition-all duration-300 hover:text-3xl font-bold text-blue-600"
          >
            Job Portal
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 text-gray-600 text-2xl">
            <Link href="/" className="hover:text-3xl transition-all duration-300 hover:text-black">Home</Link>
            <Link href="/jobs" className="hover:text-3xl transition-all duration-300 hover:text-black">Jobs</Link>
            <Link href="/admin" className="hover:text-3xl transition-all duration-300 hover:text-black">Admin</Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-gray-600">
            <Link href="/" className="hover:text-black hover:text-2xl transition-all duration-300">Home</Link>
            <Link href="/jobs" className="hover:text-black hover:text-2xl transition-all duration-300">Jobs</Link>
            <Link href="/admin" className="hover:text-black hover:text-2xl transition-all duration-300">Admin</Link>
          </div>
        )}
      </div>
    </nav>
  );
}