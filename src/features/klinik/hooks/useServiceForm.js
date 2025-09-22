import { useState } from 'react';
import { createServiceRequest, uploadServiceImage } from '../api/klinikService';

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

    try {
      const createResponse = await createServiceRequest({
        title: formData.title,
        description: formData.description,
      });

      const businessId = createResponse.data.id;

      if (formData.image && businessId) {
        await uploadServiceImage({ businessId, image: formData.image });
      }

      setStatus({ type: 'success', message: 'Permintaan Anda telah berhasil dikirim!' });
      // Reset form
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