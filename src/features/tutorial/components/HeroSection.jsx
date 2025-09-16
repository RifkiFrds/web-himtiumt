/* eslint-disable react/prop-types */
import { Poppins } from "../../../components/ui/Text";
import { PlaceholdersAndVanishInput } from "../../../components/Placeholder"; 

export default function HeroSection({ onSearchChange, onSearchSubmit }) {
  const placeholders = [
    "Tutorial React.js untuk Pemula",
    "Bagaimana cara membuat REST API?",
    "Tips & Trik Desain UI/UX",
    "Belajar Dasar-dasar Cybersecurity",
    "Belajar HTML dan CSS",
  ];

  return (
    <section className="pt-20 pb-10 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Belajar Asik di Ruang Tutorial <span className="block w-full py-2 text-transparent bg-clip-text leading-[3rem] bg-gradient-to-r from-yellow-400 to-blue-800 text-center lg:inline">
            HIMTI
            </span>
        </h2>
        <Poppins className="mt-4 max-w-4xl mx-auto text-lg text-gray-600">
          Mau jago teknologi? Di sini tempatnya! Temukan tips, trik, dan tutorial terkini yang gampang dipahami. Yuk, mulai jelajahi sekarang.
        </Poppins>

        <div className="w-full max-w-xl mx-auto mt-10">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={onSearchChange}
            onSubmit={onSearchSubmit}

          />
        </div>
      </div>
    </section>
  );
}