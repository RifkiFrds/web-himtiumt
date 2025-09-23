/* eslint-disable react/prop-types */
import { Poppins } from "../../../../components/ui/Text";
import { useStruktural } from "../../../struktural/hooks/useStruktural";
import LoadingStatus from "../../../../components/LoadingStatus";
import ErrorStatus from "../../../../components/ErrorStatus";
import { StrukturalCard } from "./StrukturalCard";

export default function SoHimtiSection() {
  const { loading, error, topTwo, middleFour, bottomFour } = useStruktural();

  if (loading) return <LoadingStatus message="Memuat data struktural..." />;
  if (error) return <ErrorStatus message={error} />;

  return (
    <section className="py-20 bg-gray-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <Poppins className="text-white font-semibold bg-gradient-to-r from-[#4C76A3] to-[#203D5D] px-6 py-2 rounded-full tracking-wider uppercase text-sm mx-auto w-fit">
          HIMTI Leadership
        </Poppins>
        <h2 className="mt-2 text-4xl md:text-5xl font-bold text-gray-900">
          Struktural HIMTI Periode 2024-2025
        </h2>
        <Poppins className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
          Kami hadir untuk membentuk mahasiswa Teknik Informatika yang unggul
          di kelas dan berdaya di luar kelas. Mengasah kemampuan teknis, soft
          skill, sekaligus mempererat solidaritas antar anggota HIMTI UMT.
        </Poppins>
      </div>

      {/* Cards */}
      <div className="mt-16 max-w-5xl mx-auto px-4 flex flex-col items-center space-y-8">
        {/* Baris Atas (2 orang) */}
        <div className="w-full flex flex-col sm:flex-row justify-center gap-6">
          {topTwo.map((member) => (
            <div key={member.id} className="w-full sm:w-1/2 h-full">
              <StrukturalCard member={member} className="h-full sm:h-full" />
            </div>
          ))}
        </div>

        {/* Baris Tengah (4 orang) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {middleFour.map((member) => (
            <StrukturalCard key={member.id} member={member} />
          ))}
        </div>

        {/* Baris Bawah (4 orang) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bottomFour.map((member) => (
            <StrukturalCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
