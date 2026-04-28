import Section from "./Section";

function EmptyLines({ count = 4 }) {
  return <div className={`rounded-md border border-slate-100 ${count > 4 ? "min-h-28" : "min-h-20"}`} />;
}

export default function LeftColumn() {
  return (
    <aside className="space-y-8">
      <Section title="Contact">
        <EmptyLines count={3} />
      </Section>

      <Section title="Skills">
        <EmptyLines count={5} />
      </Section>

      <Section title="Education">
        <EmptyLines count={4} />
      </Section>

      <Section title="Strengths">
        <EmptyLines count={4} />
      </Section>
    </aside>
  );
}
