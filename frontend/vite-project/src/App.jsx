import React, { createContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import TermsAcceptance from "./pages/TermsAcceptance";
import TermsAcceptance2 from "./pages/TermsAcceptance2";
import DataDeclaration from "./pages/DataDeclaration";
import InitialRepresentations from "./pages/InitialRepresentations";
import ListRepresentation from "./pages/ListRepresentation";
import CardRepresentation from "./pages/CardRepresentation";
import BlogRepresentation from "./pages/BlogRepresentation";
import VideoRepresentation from "./pages/VideoRepresentation";
import EvaluationPage from "./pages/EvaluationPage";
import AlumniDetailPage from "./pages/AlumniDetailPage";
import ThanksForPartaking from "./pages/ThanksForPartaking";
import VideoPlaybackPage from "./pages/VideoPlaybackPage"; // Import the new component
import "./index.css";
import "normalize.css";
import { AppProvider } from "./AppContext";
// Custom hook to clear sessionStorage when navigating to the root URL
const UseClearSessionStorage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      sessionStorage.removeItem("visitedPages");
    }
  }, [location.pathname]);

  return null;
};

export const AppContext = createContext();

const App = () => {
  return (
    <AppProvider>
      <Router>
        <UseClearSessionStorage /> {/* Invoke the custom hook */}
        <div>
          <hr style={{ border: "10px solid #8B0000", marign: 0, width: "100vw" }} />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<TermsAcceptance />} />
            <Route path="/accept" element={<TermsAcceptance2 />} />
            <Route path="/data-declaration" element={<DataDeclaration />} />
            <Route path="/initial-representations" element={<InitialRepresentations />} />
            <Route path="/thanksForPartaking" element={<ThanksForPartaking />} />
            <Route path="/list" element={<ListRepresentation />} />
            <Route path="/card" element={<CardRepresentation />} />
            <Route path="/blog" element={<BlogRepresentation />} />
            <Route path="/video" element={<VideoRepresentation />} />
            <Route path="/evaluation" element={<EvaluationPage />} />
            <Route path="/alumni/:id" element={<AlumniDetailPage />} />
            <Route path="/video-playback" element={<VideoPlaybackPage />} /> {/* Add new route */}
            {/* Redirect to the first page if an unknown route is accessed */}
            <Route path="*" element={<TermsAcceptance />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
