import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import ContatoPage from "./pages/ContatoPage.jsx";
import VpnPage from "./pages/VpnPage.jsx";
import JabberPage from "./pages/JabberPage.jsx";
import OutlookPage from "./pages/OutlookPage.jsx";
import FhemigPage from "./pages/FhemigPage.jsx";
import SigaMePage from "./pages/SigaMePage.jsx";
import TutoriaisPage from "./pages/TutoriaisPage.jsx";
import SuportePage from "./pages/SuportePage.jsx";
import DownloadsPage from "./pages/DownloadsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import PainelPage from "./pages/PainelPage.jsx";
import OneDrivePage from "./pages/OneDrivePage.jsx";
import TokenPage from "./pages/TokenPage.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contato" element={<ContatoPage />} />
        <Route path="/fhemig" element={<FhemigPage />} />
        <Route path="/jabber" element={<JabberPage />} />
        <Route path="/outlook" element={<OutlookPage />} />
        <Route path="/onedrive" element={<OneDrivePage />} />
        <Route path="/sigaMe" element={<SigaMePage />} />
        <Route path="/vpn" element={<VpnPage />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/tutoriais" element={<TutoriaisPage />} />
        <Route path="/suporte" element={<SuportePage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/painel" element={<PainelPage />} />
      </Routes>
    </BrowserRouter>
  </ErrorBoundary>
);
