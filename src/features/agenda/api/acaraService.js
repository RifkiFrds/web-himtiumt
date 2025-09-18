import apiClient from "../../../api/apiClient";

export const getAcara = async () => {
  try {
    // Mengambil data dari endpoint /v1/acara
    const response = await apiClient.get('/acara');
    return response.data;
  } catch (error) {
    console.error("Error fetching acara:", error);
    throw error; // Lemparkan error untuk ditangani oleh komponen
  }
};