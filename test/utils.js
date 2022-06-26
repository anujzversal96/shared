import axios from "axios";

export const BASE_URL = "http://localhost:8080/api/v1/";

export const fetchUsers = async () => {
  try {
    return await axios.get(`${BASE_URL}/fetchEmployee`);
  } catch (e) {
    return [{error: "error"}];
  }
}; 


export const registerUsers = async () => {
  try {
    return await axios.post(`${BASE_URL}/registerEmployee`);
  } catch (e) {
    return [{error: "error"}];
  }
};