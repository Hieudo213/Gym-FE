import axios from "axios";

export const createClub = async (file, data) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("data", JSON.stringify(data));

  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/club/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const updateClub = async (file, data, id) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("data", JSON.stringify(data));

  try {
    const response = await axios.put(
      `http://localhost:8080/api/v1/club/update/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

export const deleteClubById = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/api/v1/club/${id}`);
        if (response) {
          return response.data;
        }
      } catch (error) {
        console.log(error);
      }
      return undefined;
}
