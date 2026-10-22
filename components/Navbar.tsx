"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isStudentsActive = pathname.startsWith("/students");
  const isAboutActive = pathname.startsWith("/about");

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200">
      <div className="max-w-[1140px] mx-auto px-6 h-[62px] flex items-center justify-between">
        <div className="flex items-center gap-8 h-full">
          <Link href="/" className="flex items-center gap-2.5 text-slate-900">
            <svg
              className="w-6 h-6 stroke-indigo-700"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            <span className="text-[17px] font-bold text-slate-900 tracking-tight">
              Campus Directory
            </span>
          </Link>

          <nav className="flex items-center gap-6 h-full">
            <Link
              href="/students"
              className={`flex items-center h-full text-sm px-1 relative transition-colors duration-150 ${
                isStudentsActive
                  ? "text-slate-900 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-indigo-600 after:rounded-t"
                  : "text-slate-500 font-medium hover:text-slate-900"
              }`}
            >
              Students
            </Link>
            <Link
              href="/about"
              className={`flex items-center h-full text-sm px-1 relative transition-colors duration-150 ${
                isAboutActive
                  ? "text-slate-900 font-semibold after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2.5px] after:bg-indigo-600 after:rounded-t"
                  : "text-slate-500 font-medium hover:text-slate-900"
              }`}
            >
              About
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <span className="hidden sm:inline-block text-xs font-medium text-slate-500 bg-white border border-slate-300 px-2.5 py-1 rounded tracking-tight">
            Frontend Practice
          </span>
        </div>
      </div>
    </header>
  );
}