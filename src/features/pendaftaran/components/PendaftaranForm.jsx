/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { X, CheckCircle, AlertTriangle } from 'lucide-react';

const SuccessDisplay = ({ message, onClose }) => (
  <div className="flex flex-col items-center p-8 text-center">
    <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
    <h3 className="mb-2 text-xl font-bold text-gray-900">
      Pendaftaran Berhasil!
    </h3>
    <p className="mb-8 text-gray-600">{message}</p>
    <Button onClick={onClose} className="w-full">
      Selesai
    </Button>
  </div>
);

const PendaftaranForm = ({
  event,
  onClose,
  onSubmit,
  isSubmitting,
  formStatus,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    generation: '',
    image: null,
    registrationTypeId: event.id,
    eventId: event.eventId,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isClassRequired =
    event.type === 'BOOTCAMP' || event.type === 'LEARNING_GROUP';
  const isBootcamp = event.type === 'BOOTCAMP';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade-in">
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-xl">
        {formStatus.type === 'success' ? (
          <SuccessDisplay message={formStatus.message} onClose={onClose} />
        ) : (
          <div className="p-6">
            <div className="flex items-center justify-between border-b pb-4">
              <h2 className="text-xl font-bold text-gray-900">
                Form Pendaftaran: {event.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X />
              </button>
            </div>

            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nama Lengkap
                </label>
                <Input
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                />
              </div>

              {isClassRequired && (
                <div>
                  <label htmlFor="class" className="block text-sm font-medium">
                    Kelas
                  </label>
                  <Input
                    name="class"
                    placeholder="contoh: TI-01-A1"
                    onChange={handleChange}
                    value={formData.class}
                    required={isClassRequired}
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="generation"
                  className="block text-sm font-medium"
                >
                  Angkatan
                </label>
                <Input
                  name="generation"
                  type="number"
                  placeholder="contoh: 2024"
                  onChange={handleChange}
                  value={formData.generation}
                  required
                />
              </div>

              {isBootcamp && (
                <div>
                  <label htmlFor="image" className="block text-sm font-medium">
                    Upload Bukti Pembayaran
                  </label>
                  <Input
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    accept="image/png, image/jpeg, image/jpg"
                    required
                  />
                </div>
              )}

              {formStatus.type === 'error' && (
                <div className="flex items-center gap-2 p-3 text-sm text-red-800 bg-red-100 rounded-md">
                  <AlertTriangle size={20} />
                  {formStatus.message}
                </div>
              )}

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Mengirim...' : 'Daftar Sekarang'}
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendaftaranForm;