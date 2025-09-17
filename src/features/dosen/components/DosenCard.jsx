/* eslint-disable react/prop-types */
import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// Komponen Card dosen
export const ProfileCard = ({ className, children, image }) => {
  return (
    <div
      className={cn(
        "rounded-xl h-full w-full overflow-hidden bg-white border border-slate-200 group-hover:border-blue-500 relative z-20 shadow-sm",
        className
      )}
    >
      <img
        src={image}
        alt="profile"
        className="w-full h-58 object-cover"
      />
      <div className="p-4">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-gray-900 font-bold tracking-wide text-lg", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-1 text-blue-600 font-semibold tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

// Komponen utama
export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-slate-100 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <ProfileCard image={item.image}>
            <CardTitle>{item.name}</CardTitle>
            <CardDescription>{item.title}</CardDescription>
            
            <div className="text-left mt-4 pt-3 border-t border-gray-200 space-y-2">
              <p className="text-xs text-gray-600">
                <span className="font-semibold">NIDN:</span> {item.nidn}
              </p>
              <p className="text-xs text-gray-600">
                <span className="font-semibold">Lahir:</span> {item.birth}
              </p>
              <p className="text-xs text-gray-500 italic mt-2">
                &quot;{item.description}&quot;
              </p>
            </div>
          </ProfileCard>
        </div>
      ))}
    </div>
  );
};