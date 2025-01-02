import axios from "axios";

export const getAllClub = async () => {
  try {
    const response = await axios.get("http://localhost:8080/api/v1/club");
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

export const getClubByID = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/club/${id}`);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };

  export const getAllGym = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/gym");
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };

  export const getGymById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/gym/${id}`);
      if (response) {
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
    return undefined;
  };
  
