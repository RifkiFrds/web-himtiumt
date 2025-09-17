import { FaUsers, FaChalkboardTeacher, FaCode, FaBullhorn } from "react-icons/fa";

export const dataAgenda = {
  upcoming: [
    {
      id: 1,
      title: "Webinar: Pengenalan Karir di Bidang Cybersecurity",
      date: "2025-09-30T19:00:00",
      location: "Online via Zoom",
      description: "Pelajari fundamental cybersecurity dan prospek karir di masa depan.",
      image: "/images/program/cyber.jpg",
      icon: FaChalkboardTeacher, 
    },
    {
      id: 2,
      title: "Workshop UI/UX Design: Dari Riset hingga Prototipe",
      date: "2025-10-15T09:00:00",
      location: "Gedung Lab. Teknik Lt. 4",
      description: "Workshop intensif selama satu hari untuk belajar proses desain produk.",
      image: "/images/program/uiux.jpg",
      icon: FaUsers,
    },
  ],
  finished: [
    {
      id: 3,
      title: "HIMTI DevTalks: Introduction to React Native",
      date: "2025-08-20T19:00:00",
      location: "Online via GMeet",
      description: "Sesi sharing mengenai pengembangan aplikasi mobile cross-platform.",
      image: "/images/program/mobile.jpg",
      icon: FaCode,
    },
    {
      id: 4,
      title: "Bootcamp Front-End Web Development",
      date: "2025-08-01T09:00:00",
      location: "Universitas Muhammadiyah Tangerang",
      description: "Pelatihan intensif selama 3 hari membangun website modern.",
      image: "/images/program/web.jpg",
      icon: FaBullhorn, 
    },
  ],
};