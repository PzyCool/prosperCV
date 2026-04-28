import Section from "./Section";

export default function EducationSection({ education }) {
  return (
    <Section title="Education">
      <ul className="space-y-3">
        {education?.map((item, index) => (
          <li
            key={`${item.institution}-${index}`}
            className="print-avoid-break space-y-0.5 rounded-md border border-slate-200 p-2.5"
          >
            <h4 className="text-[13px] font-semibold text-slate-900">{item.degree}</h4>
            <p className="text-[12px] text-slate-700">{item.institution}</p>
            {item.period ? (
              <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{item.period}</p>
            ) : null}
            {item.extra ? <p className="text-[12px] text-slate-600">{item.extra}</p> : null}
          </li>
        ))}
      </ul>
    </Section>
  );
}
