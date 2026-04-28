import Section from "./Section";
import { getTechIcon } from "./techIcons";

export default function SkillsSection({ skills }) {
  const groups = [
    { label: "Languages", values: skills?.languages },
    { label: "Frontend", values: skills?.frontend },
    { label: "Backend", values: skills?.backend },
    { label: "Database", values: skills?.database },
    { label: "Tools", values: skills?.tools },
    { label: "Other", values: skills?.other },
  ];

  return (
    <Section title="Skills">
      <ul className="space-y-3">
        {groups.map((group) => (
          <li key={group.label} className="space-y-1.5">
            <p className="text-[12px] font-semibold text-slate-800">{group.label}</p>
            <div className="flex flex-wrap gap-1.5">
              {group.values?.map((value, index) => {
                const Icon = getTechIcon(value);
                const isPwaInOther =
                  group.label === "Other" &&
                  value.toLowerCase().includes("progressive web application");
                return (
                  <span
                    key={`${group.label}-${value}-${index}`}
                    className={`inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[12px] leading-none text-slate-700 ${
                      isPwaInOther ? "basis-full" : ""
                    }`}
                  >
                    <Icon size={12} className="shrink-0 text-slate-500" />
                    {value}
                  </span>
                );
              }) || <span>-</span>}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
