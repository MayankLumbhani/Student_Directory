import Link from "next/link";
import { notFound } from "next/navigation";
import { students } from "@/data/students";
import Navbar from "../../../../components/Navbar";

export default async function StudentProfile({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const student = students.find((item) => item.id === Number(id));

  if (!student) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      <main className="max-w-[820px] w-full mx-auto px-5 py-8 pb-16">
        {/* Breadcrumb matching Image 1 */}
        <div className="flex items-center gap-2 text-xs sm:text-sm mb-2.5">
          <Link href="/students" className="text-slate-500 hover:text-slate-900 transition-colors">
            Students
          </Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-900 font-semibold">{student.name}</span>
        </div>

        {/* Back Link matching Image 1 */}
        <div className="mb-5.5">
          <Link
            href="/students"
            className="text-slate-600 hover:text-slate-900 text-xs sm:text-sm font-medium inline-flex items-center gap-1 transition-colors"
          >
            ← Back to students
          </Link>
        </div>

        {/* Profile Card matching Image 1 */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-9 shadow-xs">
          {/* Header Row: Initials Avatar + Name + Badges */}
          <div className="flex items-center gap-4.5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base tracking-tight shrink-0"
              style={{
                backgroundColor: student.avatarColor.bg,
                color: student.avatarColor.text,
              }}
            >
              {student.initials}
            </div>

            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-[26px] font-bold text-slate-900 tracking-tight mb-1.5">
                {student.name}
              </h1>
              <div className="flex items-center gap-2">
                <span className="bg-slate-50 border border-slate-200 text-slate-600 text-[11px] font-semibold px-2 py-0.5 rounded font-mono tracking-wide">
                  {student.studentId}
                </span>
                <span className="bg-green-100 border border-green-200 text-green-700 text-[11px] font-semibold px-2 py-0.5 rounded">
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200 my-6" />

          {/* Metadata Section: Department, Study Year, Email, Enrolled */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-x-12">
            <div className="flex flex-col gap-4.5">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
                  DEPARTMENT
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {student.department}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
                  EMAIL
                </span>
                <a
                  href={`mailto:${student.email}`}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  {student.email}
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4.5">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
                  STUDY YEAR
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {student.studyYear}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-1">
                  ENROLLED
                </span>
                <span className="text-sm font-semibold text-slate-900">
                  {student.enrolled}
                </span>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-200 my-6" />

          {/* About Section */}
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-slate-900 mb-2.5">About</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {student.about}
            </p>
          </div>

          <div className="h-px bg-slate-200 my-6" />

          {/* Academic Details Section */}
          <div className="flex flex-col">
            <h2 className="text-base font-bold text-slate-900 mb-3">Academic Details</h2>

            <div className="flex flex-col gap-3 mb-5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 font-normal">Department</span>
                <span className="text-slate-900 font-semibold">{student.department}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-600 font-normal">Current Academic Standing</span>
                <span className="text-slate-900 font-semibold">{student.currentStanding}</span>
              </div>
            </div>

            <div>
              <span className="block text-[11px] font-semibold text-slate-500 tracking-wider uppercase mb-2.5">
                ENROLLED SUBJECTS
              </span>
              <div className="border border-slate-200 rounded-md bg-white overflow-hidden divide-y divide-slate-100">
                {student.subjects.map((sub, idx) => (
                  <div className="flex justify-between items-center px-4 py-3 text-xs sm:text-sm" key={idx}>
                    <span className="text-slate-800 font-medium">
                      {sub.code}: {sub.name}
                    </span>
                    <span className="text-slate-500 font-medium">{sub.credits}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System footer matching Image 1 */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4.5 px-1 text-xs text-slate-500 gap-1.5">
          <span>System Record ID: {student.systemRecordId}</span>
          <span>Last validated: {student.lastValidated}</span>
        </div>
      </main>
    </div>
  );
}
