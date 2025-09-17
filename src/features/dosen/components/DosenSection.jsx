import { useState } from "react";
import { Poppins } from "../../../components/ui/Text";
import { dataDosen } from "../data/useDataDosen";
import { PlaceholdersAndVanishInput } from "../../../components/Placeholder";
import { HoverEffect } from "./DosenCard";

export default function DosenSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const placeholders = [
    "Cari nama dosen...",
    "Siapa Kaprodi Teknik Informatika?",
    "Cari dosen pembina HIMTI...",
  ];

  const filteredDosen = dataDosen.filter((dosen) =>
    dosen.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dosen.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Adaptasi data untuk HoverEffect
  const itemsForHoverEffect = filteredDosen.map(dosen => ({
    name: dosen.name,
    title: dosen.title,
    nidn: dosen.nidn,
    image: dosen.image,
    birth: dosen.birth,          
    description: dosen.description,
  }));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Judul Section */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Staf <span className="text-blue-600">Pengajar</span>
          </h2>
          <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Kenali lebih dekat para dosen ahli dan berdedikasi di program studi Teknik Informatika.
          </Poppins>
        </div>

        {/* Search Input */}
        <div className="w-full max-w-xl mx-auto mb-16">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setSearchTerm(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
          />
        </div>

        {/* Grid Kartu Dosen */}
        <HoverEffect items={itemsForHoverEffect} />
        
        {/* Pesan jika tidak ada hasil */}
        {filteredDosen.length === 0 && (
          <div className="text-center col-span-full mt-8">
            <Poppins className="text-gray-500">Dosen tidak ditemukan.</Poppins>
          </div>
        )}
      </div>
    </section>
  );
}
