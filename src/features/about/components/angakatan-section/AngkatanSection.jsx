/* eslint-disable react/prop-types */
import { Poppins } from "../../../../components/ui/Text";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Instagram, Github } from "lucide-react";
import { Tabs } from "../../../../components/Tabs";
import { useAngkatan } from "../../../angkatan/hooks/useAngkatan";
import LoadingStatus from "../../../../components/LoadingStatus";
import ErrorStatus from "../../../../components/ErrorStatus";

// Card untuk menampilkan setiap anggota
const MemberCard = ({ data }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl shadow-md p-6 text-center flex flex-col items-center"
    >
      <img
        src={data.image}
        alt={data.name}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-100"
      />
      <h3 className="text-lg font-bold text-gray-900">{data.name}</h3>
      <Poppins className="bg-gradient-to-r from-[#4C76A3] to-[#203D5D] bg-clip-text text-transparent text-sm font-semibold">
        {data.role}
      </Poppins>
      <div className="flex space-x-3 mt-4">
        {data.socials?.linkedin && (
          <a href={data.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700"><Linkedin size={20} /></a>
        )}
        {data.socials?.instagram && (
          <a href={data.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-600"><Instagram size={20} /></a>
        )}
        {data.socials?.github && (
          <a href={data.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900"><Github size={20} /></a>
        )}
      </div>
    </motion.div>
  );
};


// Komponen Section Utama
export default function AngkatanSection() {
  const { loading, loadingAnggota, error, angkatanTabs, anggota, activeTab, setActiveTab } = useAngkatan();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  if (loading) return <LoadingStatus message="Memuat daftar angkatan..." />;
  if (error) return <ErrorStatus message={error} />;
  
  return (
    <section id="angkatan-gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Galeri <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800">Angkatan</span>
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Mau tau siapa aja yang pernah meramaikan HIMTI UMT? Yuk kenalan sama wajah-wajah inspiratif dari tiap angkatan!
        </Poppins>
      </div>

      <div className="mt-12 w-full flex flex-col items-center">
        <Tabs
          tabs={angkatanTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          containerClassName="w-full max-w-2xl"
          activeTabClassName="bg-blue-100"
        />
      </div>

      <div className="mt-12 max-w-7xl mx-auto px-4">
        {loadingAnggota ? (
          <LoadingStatus message="Memuat data anggota..." />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab ? activeTab.value : "empty"}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {anggota.length > 0 ? (
                anggota.map((member) => (
                  <MemberCard key={member.id} data={member} />
                ))
              ) : (
                <div className="col-span-full text-center py-10">
                  <Poppins className="text-gray-500">
                    Belum ada data anggota untuk angkatan ini.
                  </Poppins>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}