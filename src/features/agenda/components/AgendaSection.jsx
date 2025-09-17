import { Poppins } from "../../../components/ui/Text";
import { TimelineItem } from "../../../components/ui/Timeline";
import { dataAgenda } from "../data/useDataAgenda";
import { motion } from "framer-motion";

export default function AgendaSection() {
  const { upcoming, finished } = dataAgenda;

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // jeda animasi
      },
    },
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Kalender Kegiatan{" "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-blue-800">
              HIMTI
            </span>
          </h2>
          <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Jangan lewatkan setiap momen berharga! Ikuti terus jadwal webinar,
            workshop, dan acara menarik lainnya dari kami.
          </Poppins>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-yellow-400 pl-4">
            Akan Datang
          </h3>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {upcoming.map((event) => (
              <TimelineItem key={event.id} item={event} />
            ))}
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-800 my-16 border-l-4 border-gray-400 pl-4">
            Telah Selesai
          </h3>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {finished.map((event) => (
              <TimelineItem key={event.id} item={event} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
