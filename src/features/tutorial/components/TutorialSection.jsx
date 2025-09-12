import { Poppins } from "../../global/components/Text";
import { PlaceholdersAndVanishInput } from "../../global/components/Placeholder"; 

export default function TutorialSection() {
  const placeholders = [
    "Tutorial React.js untuk Pemula",
    "Bagaimana cara membuat REST API?",
    "Tips & Trik Desain UI/UX",
    "Belajar Dasar-dasar Cybersecurity",
    "Manajemen Proyek dengan Scrum",
  ];

  const handleChange = (e) => {
    // Logika untuk perubahan input 
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Logika ketika form di-submit
    console.log("Form submitted");
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Belajar Asik di Ruang Tutorial <span className="block w-full py-2 text-transparent bg-clip-text leading-[3rem] bg-gradient-to-r from-yellow-400 to-blue-800 text-center lg:inline">
            HIMTI
            </span>
        </h2>
        <Poppins className="mt-4 max-w-4xl mx-auto text-lg text-gray-600">
          Mau jago teknologi? Di sini tempatnya! Temukan tips, trik, dan tutorial terkini yang gampang dipahami. Yuk, mulai jelajahi sekarang.
        </Poppins>

        <div className="w-full max-w-xl mx-auto mt-12">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </section>
  );
}