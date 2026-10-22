import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white border border-slate-200 rounded-2xl p-8 sm:p-10 text-center shadow-xs">
          <span className="inline-block bg-indigo-50 border border-indigo-200 text-indigo-700 font-mono text-xs font-bold px-3 py-1 rounded-full mb-4">
            404 ERROR
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2.5">
            Page Not Found
          </h1>

          <p className="text-sm text-slate-500 leading-relaxed mb-6">
            The page or student record you are looking for does not exist, has been
            removed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
            <Link
              href="/students"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Back to Students
            </Link>
            <Link
              href="/"
              className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
