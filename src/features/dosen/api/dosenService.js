import apiClient from "../../../api/apiClient";

export const getDosen = async () => {
  try {
    const response = await apiClient.get('/dosen');
    return response.data;
  } catch (error) {
    console.error("Error fetching dosen:", error);
    throw error;
  }
};