import { useState } from 'react';
import { createServiceRequest } from '../api/klinikService';

export const useServiceForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', image: null });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData(prev => ({ ...prev, image: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Cek jika gambar wajib ada
    if (!formData.image) {
        setStatus({ type: 'error', message: 'Gambar wajib diunggah.' });
        setIsLoading(false);
        return;
    }

    try {
      // Panggil satu fungsi yang mengirim semua data
      await createServiceRequest(formData);

      setStatus({ type: 'success', message: 'Permintaan Anda telah berhasil dikirim!' });
      setFormData({ title: '', description: '', image: null });
      setTimeout(() => setStatus({ type: '', message: '' }), 5000);

    } catch (error) {
      setStatus({ type: 'error', message: 'Gagal mengirim permintaan. Silakan coba lagi.' });
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, status, isLoading, handleChange, handleSubmit };
};