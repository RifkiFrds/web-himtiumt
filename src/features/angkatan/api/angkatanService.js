import apiClient from "../../../api/apiClient";

// Fungsi untuk mengambil daftar tahun angkatan
export const getAngkatanList = async () => {
  try {
    const response = await apiClient.get('/angkatan?status=active');
    return response.data;
  } catch (error) {
    console.error("Error fetching angkatan list:", error);
    throw error;
  }
};

// Fungsi untuk mengambil data anggota berdasarkan ID angkatan
export const getAnggotaByAngkatan = async (angkatanId) => {
  if (!angkatanId) return []; 
  try {
    const response = await apiClient.get(`/anggota?angkatanId=${angkatanId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching anggota for angkatan ${angkatanId}:`, error);
    throw error;
  }
};