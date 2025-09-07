import { Poppins } from "../../../features/global/components/Text/index";

export default function ArtikelSection() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <Poppins className="inline-block bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase">
          Artikel Terbaru
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Jelajahi Artikel Kami
        </h2>
        <Poppins className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
          Lihat Artikel & Berita Mulai dari tentang teknolgi hingga isu Sosial.
        </Poppins>
      </div>
    </section>
  );
}