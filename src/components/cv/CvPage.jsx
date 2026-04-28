import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";
import ProfileHeader from "./ProfileHeader";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import SummarySection from "./SummarySection";
import ProjectsSection from "./ProjectsSection";
import ExperienceSection from "./ExperienceSection";
import Section from "./Section";
import { cvData } from "../../data/cvData";

export default function CvPage() {
  const cvPaperRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const handleDownloadPdf = async () => {
    if (!cvPaperRef.current || isDownloading) return;
    let exportWrapper = null;

    try {
      setIsDownloading(true);
      setDownloadError("");

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const exportNode = cvPaperRef.current.cloneNode(true);
      exportNode.style.margin = "0";
      exportNode.style.maxWidth = "210mm";
      exportNode.style.width = "210mm";
      exportNode.style.minHeight = "297mm";
      exportNode.style.background = "#ffffff";
      exportNode.style.boxShadow = "none";
      exportNode.style.borderRadius = "0";

      exportWrapper = document.createElement("div");
      exportWrapper.style.position = "fixed";
      exportWrapper.style.left = "0";
      exportWrapper.style.top = "0";
      exportWrapper.style.zIndex = "-1";
      exportWrapper.style.opacity = "0";
      exportWrapper.style.pointerEvents = "none";
      exportWrapper.style.background = "#ffffff";
      exportWrapper.style.padding = "0";
      exportWrapper.style.margin = "0";
      exportWrapper.appendChild(exportNode);
      document.body.appendChild(exportWrapper);

      const imageData = await toPng(exportNode, {
        cacheBust: true,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
        width: exportNode.scrollWidth,
        height: exportNode.scrollHeight,
      });

      const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4", compress: true });
      const pageWidth = 210;
      const pageHeight = 297;
      const imageProps = pdf.getImageProperties(imageData);
      const imageRatio = imageProps.width / imageProps.height;
      const pageRatio = pageWidth / pageHeight;

      let renderWidth = pageWidth;
      let renderHeight = pageHeight;

      if (imageRatio > pageRatio) {
        renderHeight = pageWidth / imageRatio;
      } else {
        renderWidth = pageHeight * imageRatio;
      }

      const x = (pageWidth - renderWidth) / 2;
      const y = (pageHeight - renderHeight) / 2;

      pdf.addImage(imageData, "PNG", x, y, renderWidth, renderHeight, undefined, "FAST");

      const fileName = `${cvData.profile.fullName.replace(/\s+/g, "-")}-CV.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error("PDF download failed:", error);
      setDownloadError("Download failed. Please refresh and try again.");
    } finally {
      if (exportWrapper) exportWrapper.remove();
      setIsDownloading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 sm:px-6 md:py-12 print:bg-white print:p-0">
      <div className="mx-auto mb-4 flex w-full max-w-[210mm] justify-end print:hidden">
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={isDownloading}
          className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isDownloading ? "Downloading..." : "Download PDF"}
        </button>
      </div>
      {downloadError ? (
        <p className="mx-auto mb-3 w-full max-w-[210mm] text-sm text-red-600 print:hidden">{downloadError}</p>
      ) : null}

      <div
        ref={cvPaperRef}
        className="cv-paper mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-lg bg-white p-6 shadow-xl sm:p-8 print:max-w-none print:rounded-none print:p-[12mm] print:shadow-none"
      >
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
