// src/features/pendaftaran/view/PendaftaranPage.jsx
import PendaftaranForm from '../components/PendaftaranForm.jsx';
import { mockPendaftaranData } from '../data/mockPendaftaran'; 

export default function PendaftaranPage() {
  const acaraTersedia = mockPendaftaranData.filter(item => item.isPendaftaranBuka);

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Pendaftaran Kegiatan</h1>
          <p className="text-lg text-gray-600 mt-4">
            Pilih kegiatan yang ingin Anda ikuti dan daftarkan diri Anda sekarang!
          </p>
        </div>
        
        <div className="space-y-12">
          {acaraTersedia.length > 0 ? (
            acaraTersedia.map(acara => <PendaftaranForm key={acara.id} acara={acara} />)
          ) : (
            <p className="text-center text-gray-500">Saat ini belum ada pendaftaran yang dibuka.</p>
          )}
        </div>
      </div>
    </section>
  );
}