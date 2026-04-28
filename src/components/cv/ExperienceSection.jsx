import Section from "./Section";

export default function ExperienceSection({ experiences }) {
  return (
    <Section title="Experience">
      <ul className="space-y-4">
        {experiences.map((item, index) => (
          <li
            key={`${item.role}-${item.company}-${index}`}
            className="print-avoid-break space-y-2 rounded-md border border-slate-200 p-3"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-[14px] font-semibold text-slate-900">
                {item.role} - {item.company}
              </h4>
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{item.period}</p>
            </div>
            {Array.isArray(item.highlights) && item.highlights.length > 0 ? (
              <ul className="list-disc space-y-1 pl-5 text-[13px] leading-[1.45] text-slate-700">
                {item.highlights.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-[13px] leading-[1.45] text-slate-700">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
