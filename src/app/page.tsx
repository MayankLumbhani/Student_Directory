import Link from "next/link";
import Navbar from "../../components/Navbar";
import { students } from "@/data/students";

export default function Home() {
  const featuredStudents = students.slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16 px-6">
          <div className="max-w-[860px] mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Official Campus Student Registry
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
              Discover students, explore academic credentials, and connect with
              the campus community.
            </h1>

            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Campus Directory is the verified central registry of undergraduate
              and graduate students. Access official academic standings, department
              affiliations, enrolled subjects, and research accomplishments.
            </p>

            <div className="flex justify-center items-center gap-3.5 mb-12 flex-wrap">
              <Link
                href="/students"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-xs hover:-translate-y-0.5"
              >
                Browse All 50 Students →
              </Link>
              <Link
                href="/about"
                className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-medium px-5 py-3 rounded-lg text-sm transition-colors"
              >
                About Registry
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="inline-flex flex-wrap items-center justify-center bg-white border border-slate-200 rounded-xl p-4 sm:px-7 shadow-xs divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
              <div className="flex flex-col px-5 py-2 sm:py-0">
                <span className="text-2xl font-extrabold text-slate-900">50</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">Enrolled Students</span>
              </div>
              <div className="flex flex-col px-5 py-2 sm:py-0">
                <span className="text-2xl font-extrabold text-slate-900">8</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">Academic Departments</span>
              </div>
              <div className="flex flex-col px-5 py-2 sm:py-0">
                <span className="text-2xl font-extrabold text-slate-900">100%</span>
                <span className="text-xs text-slate-500 font-medium mt-0.5">Verified Records</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Profiles Section */}
        <section className="max-w-[1140px] mx-auto py-14 px-6">
          <div className="flex justify-between items-end mb-7 flex-wrap gap-4">
            <div>
              <span className="block text-[11px] font-bold text-indigo-600 tracking-wider mb-1.5 uppercase">
                SPOTLIGHT
              </span>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-1">
                Featured Student Researchers
              </h2>
              <p className="text-sm text-slate-500">
                Explore active student profiles across engineering, design, and business.
              </p>
            </div>
            <Link
              href="/students"
              className="text-indigo-600 hover:underline text-xs sm:text-sm font-semibold"
            >
              View all 50 students →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredStudents.map((item) => (
              <div
                className="bg-white border border-slate-200 rounded-xl p-4.5 flex flex-col transition-all duration-150 hover:border-slate-300 hover:shadow-xs"
                key={item.id}
              >
                <div className="flex justify-between items-start">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs tracking-tight"
                    style={{
                      backgroundColor: item.avatarColor.bg,
                      color: item.avatarColor.text,
                    }}
                  >
                    {item.initials}
                  </div>
                  <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded font-mono">
                    {item.studentId}
                  </span>
                </div>

                <div className="mt-3.5 flex-1">
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
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
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                    {item.about}
                  </p>
                </div>

                <div className="border-t border-slate-100 mt-4 pt-3">
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
        </section>

        {/* Directory Capabilities Section */}
        <section className="bg-white border-y border-slate-200 py-14 px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="block text-[11px] font-bold text-indigo-600 tracking-wider mb-1.5 uppercase">
              CORE FEATURES
            </span>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight mb-2">
              Built for Institutional Transparency
            </h2>
            <p className="text-sm text-slate-500">
              A comprehensive student information and academic directory portal.
            </p>
          </div>

          <div className="max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm mb-4.5">
                01
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                Student Directory Registry
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Directly browse 50 detailed student profiles with verified
                academic standings, study years, and student ID codes.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm mb-4.5">
                02
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                Verified Academic Records
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Access verified active courses, credit weights, study standings,
                and validation stamps directly on individual profile pages.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm mb-4.5">
                03
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-2">
                Research &amp; Skill Portfolios
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Discover student technical competencies, capstone project titles,
                and specialized engineering or design research interests.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-10 px-6">
          <div className="max-w-[1140px] mx-auto flex flex-wrap justify-between items-center gap-5 mb-8">
            <div>
              <span className="text-base font-bold text-slate-900">Campus Directory</span>
              <p className="text-xs text-slate-500 mt-1">
                Centralized student profiles and institutional records system.
              </p>
            </div>
            <div className="flex gap-6">
              <Link href="/students" className="text-xs text-slate-500 hover:text-slate-900 font-medium">
                Students
              </Link>
              <Link href="/about" className="text-xs text-slate-500 hover:text-slate-900 font-medium">
                About Directory
              </Link>
            </div>
          </div>
          <div className="max-w-[1140px] mx-auto border-t border-slate-100 pt-5 text-xs text-slate-400 text-center">
            © 2026 Campus Directory. All academic records verified.
          </div>
        </footer>
      </main>
    </div>
  );
}