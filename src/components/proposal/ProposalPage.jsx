const proposalBody = [
  "My name is Prosper Arharhire, and I am a Full-Stack Developer with experience building web and mobile applications using React, React Native, Flutter, Dart, Node.js, and MongoDB.",
  "I recently completed my software engineering training and have worked on several real-world projects, including booking platforms, admin dashboards, and management systems. I am currently looking for junior developer, remote, or contract opportunities where I can contribute and continue developing my skills.",
  "I have attached my CV for your review and would appreciate any opportunity or guidance you may have.",
  "Thank you for your time.",
];

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 sm:px-6 md:py-12">
      <section className="mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-lg bg-white p-8 shadow-xl sm:p-10">
        <div className="h-1.5 w-20 rounded bg-blue-700" />

        <header className="mt-5 flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-slate-900">Proposal</h1>
            <p className="mt-1 text-sm text-slate-600">Prosper Arharhire</p>
          </div>
          <div className="space-y-1 text-right text-xs text-slate-600">
            <p>prosperoa12345@gmail.com</p>
          </div>
        </header>

        <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-slate-900">Subject: </span>
            Application for Junior Software Engineer Opportunities
          </p>
        </div>

        <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-slate-700">
          <p>Hello,</p>
          {proposalBody.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-5 text-[15px] leading-relaxed text-slate-700">
          <p>Kind regards,</p>
          <p className="mt-1 font-medium text-slate-900">Prosper</p>
        </div>
      </section>
    </main>
  );
}
