import Link from "next/link";
import Navbar from "../../../components/Navbar";
import { students } from "@/data/students";

export default function StudentPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="max-w-[1140px] w-full mx-auto px-6 py-9 pb-16">
        <div className="mb-6">
          <h1 className="text-[32px] font-bold text-slate-900 tracking-tight mb-1.5">
            Students
          </h1>
          <p className="text-sm text-slate-500">
            Browse students and view their profiles.
          </p>
        </div>

        {/* All Students Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {students.map((item) => (
            <div
              className="bg-white border border-slate-200 rounded-xl p-5 pb-4 flex flex-col transition-all duration-150 hover:border-slate-300 hover:shadow-xs"
              key={item.id}
            >
              <div className="flex justify-between items-start">
                <div
                  className="w-[38px] h-[38px] rounded-lg flex items-center justify-center font-bold text-xs tracking-tight"
                  style={{
                    backgroundColor: item.avatarColor.bg,
                    color: item.avatarColor.text,
                  }}
                >
                  {item.initials}
                </div>
                <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded font-mono tracking-wide">
                  {item.studentId}
                </span>
              </div>

              <div className="mt-3.5 flex-1">
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 tracking-tight">
                  {item.name}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                      item.department === "Computer Science"
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "bg-slate-50 text-slate-600 border border-slate-200"
                    }`}
                  >
                    {item.department}
                  </span>
                  <span className="text-xs text-slate-500">{item.year}</span>
                </div>
              </div>

              <div className="border-t border-slate-100 mt-4.5 pt-3.5">
                <Link
                  href={`/students/${item.id}`}
                  className="text-blue-600 hover:text-blue-800 text-xs font-semibold inline-flex items-center gap-1 group transition-colors"
                >
                  View profile{" "}
                  <span className="group-hover:translate-x-0.5 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
