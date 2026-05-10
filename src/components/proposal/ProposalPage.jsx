import { useRef, useState } from "react";
import jsPDF from "jspdf";
import { toPng } from "html-to-image";

const proposalBody = [
  "My name is Prosper Arharhire, and I am a Full-Stack Developer with experience building web and mobile applications using React, React Native, Flutter, Dart, Node.js, and MongoDB.",
  "I recently completed my software engineering training and have worked on several real-world projects, including booking platforms, admin dashboards, and management systems. I am currently looking for junior developer, remote, or contract opportunities where I can contribute and continue developing my skills.",
  "I have attached my CV for your review and would appreciate any opportunity or guidance you may have.",
  "Thank you for your time.",
];

export default function ProposalPage() {
  const proposalRef = useRef(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  const handleDownloadPdf = async () => {
    if (!proposalRef.current || isDownloading) return;

    let exportWrapper = null;

    try {
      setIsDownloading(true);
      setDownloadError("");

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      const exportNode = proposalRef.current.cloneNode(true);
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
      pdf.save("Prosper-Arharhire-Proposal.pdf");
    } catch (error) {
      console.error("Proposal PDF download failed:", error);
      setDownloadError("Download failed. Please refresh and try again.");
    } finally {
      if (exportWrapper) exportWrapper.remove();
      setIsDownloading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8 text-slate-800 sm:px-6 md:py-12">
      <div className="mx-auto mb-4 flex w-full max-w-[210mm] justify-end">
        <button
          type="button"
          onClick={handleDownloadPdf}
          disabled={isDownloading}
          className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
        >
          {isDownloading ? "Downloading..." : "Download PDF"}
        </button>
      </div>
      {downloadError ? <p className="mx-auto mb-3 w-full max-w-[210mm] text-sm text-red-600">{downloadError}</p> : null}

      <section
        ref={proposalRef}
        className="mx-auto w-full max-w-[210mm] min-h-[297mm] rounded-lg bg-white p-8 shadow-xl sm:p-10"
      >
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
