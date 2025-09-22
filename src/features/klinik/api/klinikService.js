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

// 1. Create the service with text data
export const createServiceRequest = async (data) => {
  try {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);

    const response = await apiClient.post('/business/service', formData, {
      headers: {
        // This header is crucial for file uploads
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating service request:", error);
    throw error;
  }
};

// 2. Upload an image to the created service ID
export const uploadServiceImage = async ({ businessId, image }) => {
  try {
    const formData = new FormData();
    formData.append('image', image);

    const response = await apiClient.post(`/business/${businessId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error uploading service image:", error);
    throw error;
  }
};