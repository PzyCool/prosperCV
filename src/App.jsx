import { Routes, Route } from "react-router-dom";
import CvPage from "./components/cv/CvPage";
import ProposalPage from "./components/proposal/ProposalPage";

function Home() {
  return <CvPage />;
}

function PrintCV() {
  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      Print Layout
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proposal" element={<ProposalPage />} />
      <Route path="/proprsoal" element={<ProposalPage />} />
      <Route path="/print" element={<PrintCV />} />
    </Routes>
  );
}
