/* eslint-disable react/prop-types */
import { motion, useInView} from "framer-motion";
import { useRef } from "react";
import { cn } from "../../../lib/utils";
import { format, formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";

export const TracingBeam = ({ children, className }) => {
  return (
    <div className={cn("relative w-full max-w-4xl mx-auto h-full", className)}>
      <div className="absolute left-1/2 top-2 transform -translate-x-1/2 h-full">
        <motion.div
          className="absolute h-full bg-gray-200 rounded-full"
          style={{ width: "4px" }}
        />
      </div>
      <div className="relative">{children}</div>
    </div>
  );
};

export const TimelineItem = ({ item }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const eventDate = new Date(item.date);
  const Icon = item.icon; 

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mb-12"
    >
      <div className="flex items-center gap-4">
        {/* Ikon */}
        <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-400 text-white shadow-lg">
          {Icon && <Icon />}
        </div>
        {/* Judul dan Status Waktu */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">{format(eventDate, "d MMMM yyyy", { locale: id })}</h3>
          <p className="text-sm text-gray-500">
            {formatDistanceToNow(eventDate, { addSuffix: true, locale: id })}
          </p>
        </div>
      </div>

      {/* Konten Gambar */}
      <div className="relative mt-4 ml-6 border-l-2 border-gray-200 pl-10">
        <div className="transform transition-all duration-300 hover:scale-[1.02]">
          <img
            src={item.image}
            alt={item.title}
            className="mb-4 aspect-video w-full rounded-lg object-cover shadow-md"
          />
        </div>
        <h4 className="text-xl font-semibold text-gray-900">{item.title}</h4>
        <p className="mt-2 text-gray-600">{item.description}</p>
        <p className="mt-2 text-sm font-semibold text-yellow-500">{item.location}</p>
      </div>
    </motion.div>
  );
};
