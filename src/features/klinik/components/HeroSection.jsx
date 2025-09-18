import { Poppins } from "../../../components/ui/Text";

const HeroSection = () => {
  return (
    <section className="relative bg-white py-20 md:py-20 animate-fade-in-up">
       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
           Klinik & <span className="text-yellow-400">Merchandise</span>
         </h1>
         <Poppins className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600">
          Pusat layanan dan produk dari Himpunan Mahasiswa Teknik Informatika UMT. Kami siap membantu kebutuhan teknologimu dan membuatmu tampil lebih keren.
         </Poppins>
       </div>
    </section>
  );
};

export default HeroSection;