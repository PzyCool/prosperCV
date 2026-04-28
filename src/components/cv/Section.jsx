export default function Section({ title, children }) {
  return (
    <section className="space-y-3.5">
      <h3 className="border-b border-slate-200 pb-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-slate-700">
        {title}
      </h3>
      <div className="space-y-2.5 text-[13px] leading-[1.55] text-slate-700">{children}</div>
    </section>
  );
}
