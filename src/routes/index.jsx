import { Route, Routes } from "react-router";
import MainLayout from "../features/layout/view/MainLayout";
import HomePage from "../features/home/view/HomePage";
import AboutPage from "../features/about/view/AboutPage";
import MateriPage from "../features/materi/views/MateriPage";
import ComingSoonPage from "../features/display/view/ComingSoonPage";
import ArtikelPage from "../features/artikel/view/ArtikelPage";
import ArticleDetailPage from "../features/artikel/components/ArticleDetailPage";
import TutorialPage from "../features/tutorial/view/TutorialPage";
import TutorialDetailPage from "../features/tutorial/view/TutorialDetailPage";
import AgendaPage from "../features/agenda/view/AgendaPage";
import DosenPage from "../features/dosen/view/DosenPage";
// import KlinikPage from "../features/klinik/view/KlinikPage";

export default function AppRoutes() {
  return (
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/materi" element={<MateriPage />} />
          <Route path="/artikel" element={<ArtikelPage />} />

          {/* detail page artikel  */}
          <Route path="/artikel/:id" element={<ArticleDetailPage />} />

          <Route path="/tutorial" element={<TutorialPage />} />
          
          {/* detail page tutorial */}
          <Route path="/tutorial/:id" element={<TutorialDetailPage />} />

          <Route path="/agenda" element={<AgendaPage />} />
          <Route path="/dosen" element={<DosenPage />} />
          {/* <Route path="/klinik" element={<KlinikPage />} /> */}
          <Route path="/sertifikat" element={<ComingSoonPage />} />
          <Route path="/pendaftaran" element={<ComingSoonPage />} />
        </Route>
      </Routes>
  );
}

