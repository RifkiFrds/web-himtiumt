import apiClient from "../../../api/apiClient";

export const getBusinessData = async () => {
  try {
    const response = await apiClient.get('/business/merchandise');
    return response.data;
  } catch (error) {
    console.error("Error fetching business data:", error);
    throw error;
  }
};

export const createServiceRequest = async (data) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    if (data.image) {
      formData.append('image', data.image);
    }

    const response = await apiClient.post('/business/service', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating service request:", error);
    throw error;
  }
};