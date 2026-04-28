import ProfileHeader from "./ProfileHeader";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import SummarySection from "./SummarySection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import Section from "./Section";
import { cvData } from "../../data/cvData";

export default function CvPage() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 sm:px-6 md:py-12 print:bg-white print:p-0">
      <div className="cv-paper mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-lg bg-white p-6 shadow-xl sm:p-8 print:max-w-none print:rounded-none print:p-[12mm] print:shadow-none">
        <ProfileHeader profile={cvData.profile} />

        <section className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-10">
          <div className="space-y-8 md:col-span-3">
            <SkillsSection skills={cvData.skills} />
            <EducationSection education={cvData.education} />
            <Section title="Strengths">
              <ul className="space-y-1.5 text-[13px]">
                {cvData.strengths.map((item, index) => (
                  <li key={index} className="print-avoid-break rounded-md border border-slate-200 px-2.5 py-1.5">
                    {item}
                  </li>
                ))}
              </ul>
            </Section>
          </div>
          <div className="space-y-8 md:col-span-7">
            <SummarySection summary={cvData.summary} />
            <ProjectsSection projects={cvData.projects} />
            <ExperienceSection experiences={cvData.experience} />
          </div>
        </section>
      </div>
    </main>
  );
}
