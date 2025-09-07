import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./features/global/components/ScrollToTop/index";

import MainLayout from "./features/layout/view/MainLayout";
import HomePage from "./features/home/view/HomePage";
import AboutPage from "./features/about/view/AboutPage";
import SharingPage from "./features/sharing/views/SharingPage";
import ComingSoonPage from "./features/display/view/ComingSoonPage";
import ArtikelPage from "./features/artikel/view/ArtikelPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/sharing" element={<SharingPage />} />

          {/* Only 3 Page */}
          <Route path="/artikel" element={<ArtikelPage />} />
          <Route path="/tutorial" element={<ComingSoonPage />} />
          <Route path="/agenda" element={<ComingSoonPage />} />
          <Route path="/dosen" element={<ComingSoonPage />} />
          <Route path="/klinik" element={<ComingSoonPage />} />
          <Route path="/sertifikat" element={<ComingSoonPage />} />
          <Route path="/pendaftaran" element={<ComingSoonPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
