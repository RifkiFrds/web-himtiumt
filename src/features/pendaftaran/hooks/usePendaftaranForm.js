// src/features/pendaftaran/hooks/usePendaftaranForm.js
import { useState } from 'react';

export const usePendaftaranForm = (idAcara) => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nim: '',
    email: '',
    idAcara: idAcara, // Mengambil ID acara dari props
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // --- Simulasi Pengiriman API (Metode POST) ---
    console.log("Data yang akan dikirim (POST):", formData);

    // Simulasi delay jaringan
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    try {
      // **NANTI:** Ganti bagian ini dengan pemanggilan API asli
      // const response = await submitPendaftaran(formData);
      
      // Simulasi respons sukses dari API
      setStatus({ type: 'success', message: 'Pendaftaran berhasil! Silakan cek email Anda untuk konfirmasi.' });
      setFormData({ namaLengkap: '', nim: '', email: '', idAcara: idAcara }); // Reset form

    } catch (error) {
      console.error("Gagal mengirim pendaftaran:", error);
      // Simulasi respons error dari API
      setStatus({ type: 'error', message: 'Pendaftaran gagal. Silakan coba lagi.' });
    } finally {
      setIsLoading(false);
    }
  };

  return { formData, status, isLoading, handleChange, handleSubmit };
};