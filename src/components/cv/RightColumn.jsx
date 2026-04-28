import Section from "./Section";

function EmptyLines({ count = 4 }) {
  return <div className={`rounded-md border border-slate-100 ${count > 5 ? "min-h-36" : "min-h-24"}`} />;
}

export default function RightColumn() {
  return (
    <div className="space-y-8">
      <Section title="Professional Summary">
        <EmptyLines count={4} />
      </Section>

      <Section title="Projects">
        <EmptyLines count={6} />
      </Section>

      <Section title="Experience">
        <EmptyLines count={8} />
      </Section>

      <Section title="Additional Projects">
        <EmptyLines count={4} />
      </Section>
    </div>
  );
}
