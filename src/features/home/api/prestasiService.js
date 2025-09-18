import apiClient from "../../../api/apiClient";

export const getPrestasi = async () => {
  try {
    // Sesuai dokumentasi, kita panggil si
    const response = await apiClient.get('/prestasi');
    return response.data;
  } catch (error) {
    console.error("Error fetching prestasi:", error);
    // Lemparkan error agar bisa ditangkap oleh komponen
    throw error;
  }
};