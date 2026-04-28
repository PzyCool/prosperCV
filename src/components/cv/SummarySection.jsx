import Section from "./Section";

export default function SummarySection({ summary }) {
  return (
    <Section title="Professional Summary">
      <div className="space-y-2.5">
        {summary?.map((paragraph, index) => (
          <p key={index} className="print-avoid-break text-[13px] leading-[1.55] text-slate-700">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
