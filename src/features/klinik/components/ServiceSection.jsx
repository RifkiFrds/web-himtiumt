import { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { postServiceRequest } from '../api/klinikService';
import { AlertTriangle, CheckCircle } from 'lucide-react';

const ServiceSection = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await postServiceRequest({ title, description });
      setStatus({ type: 'success', message: 'Permintaan Anda telah berhasil dikirim!' });
      setTitle('');
      setDescription('');
    } catch (error) {
      setStatus({ type: 'error', message: 'Gagal mengirim permintaan. Silakan coba lagi.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Klinik Teknologi</h2>
          <p className="mt-4 text-lg text-gray-600">
            Punya masalah dengan tugas, laptop, atau butuh jasa instalasi? Sampaikan di sini!
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">Judul Permintaan</label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="cth: Install Ulang Windows 11"
                required
              />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">Deskripsi Masalah</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                placeholder="Jelaskan masalah atau kebutuhan Anda secara detail..."
                required
              />
            </div>
            {status.message && (
              <div className={`flex items-center gap-2 p-3 rounded-md text-sm ${
                status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertTriangle size={20} />}
                {status.message}
              </div>
            )}
            <div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Mengirim...' : 'Kirim Permintaan'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;