"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center p-5 bg-slate-50 text-slate-900">
      <div className="max-w-[450px] w-full text-center bg-white border border-slate-200 rounded-xl p-9 sm:p-10 shadow-xs">
        <div className="w-12 h-12 flex items-center justify-center mx-auto mb-5 rounded-full bg-red-100 text-red-600 text-2xl font-bold">
          !
        </div>

        <h1 className="text-slate-900 text-[22px] font-bold mb-2.5">
          Unable to Load Records
        </h1>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          We encountered an issue retrieving this page from the campus registry.
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
