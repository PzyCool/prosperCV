export default function Header() {
  return (
    <header className="border-b border-slate-200 pb-8">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <div
          aria-hidden="true"
          className="h-28 w-28 rounded-2xl border border-slate-200 bg-slate-50 shadow-sm"
        />

        <div className="flex-1 space-y-4">
          <div className="min-h-16 rounded-md border border-slate-100" />
          <div className="min-h-12 rounded-md border border-slate-100" />
        </div>
      </div>
    </header>
  );
}
