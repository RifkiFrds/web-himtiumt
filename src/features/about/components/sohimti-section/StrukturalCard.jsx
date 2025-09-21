/* eslint-disable react/prop-types */
import { Linkedin, Instagram } from "lucide-react";
import { cn } from "../../../../lib/utils";

export const StrukturalCard = ({ member, className }) => (
  <div className={cn("group relative aspect-square w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl", className)}>
    <img 
      src={member.image} 
      alt={member.name} 
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-120"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-4 text-white">
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-blue-400">{member.role}</p>
      <div className="flex space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        
        {/* Logika untuk Instagram */}
        {member.socials?.instagram ? (
          <a href={`https://instagram.com/${member.socials.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
            <Instagram size={18} />
          </a>
        ) : (
          <span className="text-gray-500 cursor-not-allowed">
            <Instagram size={18} />
          </span>
        )}

        {/* Logika untuk LinkedIn */}
        {member.socials?.linkedin ? (
          <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <Linkedin size={18} />
          </a>
        ) : (
          <span className="text-gray-500 cursor-not-allowed">
            <Linkedin size={18} />
          </span>
        )}
        
      </div>
    </div>
  </div>
);