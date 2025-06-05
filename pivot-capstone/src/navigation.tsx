import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DiceGame from "./DiceGame/App";
import ContactSearch from "./ContactSearch/App";
import CatApp from "./CatApp/App";
import YoutubeVideo from "./YoutubeVideo/App";
import SocialApp from "./SocialApp/App";
import SocialAppBasic from "./SocialAppBasic/App";
import Profile from "./Profile/App";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" replace />} />
        <Route path="/dice" element={<DiceGame />} />
        <Route path="/contacts" element={<ContactSearch />} />
        <Route path="/cats" element={<CatApp />} />
        <Route path="/youtube" element={<YoutubeVideo />} />
        <Route path="/social/*" element={<SocialApp />} />
        <Route path="/social-basic/*" element={<SocialAppBasic />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </Router>
  );
}
