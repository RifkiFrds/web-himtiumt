// src/features/pendaftaran/components/PendaftaranForm.jsx
import PropTypes from 'prop-types';
import { usePendaftaranForm } from '../hooks/usePendaftaranForm';
import { Input } from '../../../components/ui/Input';
import { Button } from '../../../components/ui/Button';
import { Poppins } from '../../../components/ui/Text';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const PendaftaranForm = ({ acara }) => {
  const { formData, status, isLoading, handleChange, handleSubmit } = usePendaftaranForm(acara.id);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border">
      <h3 className="text-2xl font-bold text-gray-800">Form Pendaftaran</h3>
      <Poppins className="text-gray-600 mt-1">Acara: {acara.namaAcara}</Poppins>

      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="namaLengkap">Nama Lengkap</label>
          <Input id="namaLengkap" name="namaLengkap" value={formData.namaLengkap} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="nim">NIM</label>
          <Input id="nim" name="nim" value={formData.nim} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
        </div>
        
        {status.message && (
          <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
            status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {status.type === 'success' ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
            {status.message}
          </div>
        )}
        
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Mengirim...' : 'Daftar Sekarang'}
        </Button>
      </form>
    </div>
  );
};

PendaftaranForm.propTypes = {
  acara: PropTypes.shape({
    id: PropTypes.string.isRequired,
    namaAcara: PropTypes.string.isRequired,
  }).isRequired,
};

export default PendaftaranForm;