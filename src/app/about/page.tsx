import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-slate-50 border-b border-slate-200 py-16 px-6 text-center">
          <div className="max-w-[820px] mx-auto">
            <span className="inline-block bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold tracking-wider px-3 py-1 rounded-full mb-5 uppercase">
              ABOUT CAMPUS DIRECTORY
            </span>
            <h1 className="text-3xl sm:text-[44px] font-extrabold text-slate-900 leading-tight tracking-tight mb-5">
              Verified Student Profiles &amp;
              <br />
              <span className="text-indigo-600">Academic Records Infrastructure.</span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto mb-8">
              Campus Directory is the centralized academic registry designed for
              students, faculty, and institutional administrators. We provide a
              clean, standardized system to explore verified student standings,
              enrolled courses, and research milestones in one place.
            </p>

            <div className="flex justify-center items-center gap-3.5 flex-wrap">
              <Link
                href="/students"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg text-sm transition-all shadow-xs hover:-translate-y-0.5"
              >
                Explore Students →
              </Link>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="max-w-[1140px] mx-auto py-14 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-7 transition-all duration-150 hover:border-slate-300 hover:shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-extrabold text-sm mb-5">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Verified Credentials
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Every student profile includes verified academic standing, course
                credits, institutional emails, and system record identifiers
                audited each semester.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-7 transition-all duration-150 hover:border-slate-300 hover:shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-extrabold text-sm mb-5">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Cross-Department Discovery
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Explore student cohorts across Computer Science, Design, Business,
                Engineering, and Life Sciences with instant real-time filtering
                and search.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-7 transition-all duration-150 hover:border-slate-300 hover:shadow-xs">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center font-extrabold text-sm mb-5">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                Research &amp; Portfolios
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Connect with student researchers, view active capstone initiatives,
                and discover specialized skillsets ranging from distributed systems
                to spatial UX design.
              </p>
            </div>
          </div>
        </section>

        {/* Verification Standards Section */}
        <section className="bg-white border-y border-slate-200 py-14 px-6">
          <div className="max-w-[860px] mx-auto bg-slate-50 border border-slate-200 rounded-xl p-7 sm:p-9">
            <span className="block text-[11px] font-bold text-indigo-600 tracking-wider mb-2 uppercase">
              RECORD VERIFICATION STANDARDS
            </span>
            <h2 className="text-[22px] font-bold text-slate-900 mb-3">
              How Student Records Are Maintained
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Each profile in the Campus Directory is backed by an automated
              system record identifier (such as <code className="bg-slate-200/70 border border-slate-200 text-slate-900 px-1.5 py-0.5 rounded font-mono text-xs">0948-CS-AM</code>) and
              displays an explicit last-validated timestamp. Student enrolment
              statuses and credit loads reflect real-time registrar data.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex gap-3 items-start">
                <span className="w-5.5 h-5.5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <strong className="block text-sm text-slate-900 mb-1">
                    Registrar Synchronization
                  </strong>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Course codes, titles, and credit weights update automatically at the start of each term.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-5.5 h-5.5 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <div>
                  <strong className="block text-sm text-slate-900 mb-1">
                    Privacy &amp; Data Integrity
                  </strong>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Student privacy controls protect sensitive records while enabling peer discovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Institutional Stats */}
        <section className="max-w-[1140px] mx-auto py-14 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <span className="block text-3xl font-extrabold text-slate-900 mb-1.5">50</span>
              <span className="text-xs text-slate-500 font-medium">Active Enrolled Students</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <span className="block text-3xl font-extrabold text-slate-900 mb-1.5">8</span>
              <span className="text-xs text-slate-500 font-medium">Academic Departments</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <span className="block text-3xl font-extrabold text-slate-900 mb-1.5">100%</span>
              <span className="text-xs text-slate-500 font-medium">Verified Course Standing</span>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
              <span className="block text-3xl font-extrabold text-slate-900 mb-1.5">Fall 2026</span>
              <span className="text-xs text-slate-500 font-medium">Current Academic Term</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 text-center bg-white border-t border-slate-200 text-slate-400 text-xs">
          <p>© 2026 Campus Directory. Maintained by University Academic Computing.</p>
        </footer>
      </main>
    </div>
  );
}
