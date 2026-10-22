export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-slate-900">
      <div className="w-11 h-11 border-[3.5px] border-slate-200 border-t-indigo-600 rounded-full animate-spin mb-5" />
      <h2 className="text-xl font-bold mb-2 text-slate-900">Loading Campus Directory...</h2>
      <p className="text-sm text-slate-500">Please wait while we retrieve academic records.</p>
    </div>
  );
}