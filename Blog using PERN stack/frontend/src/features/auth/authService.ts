import axios from "axios";

const API_URL = "/";

// Register User
const register = async (userData: object) => {
  const response = await axios.post(API_URL + "/add", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Login User
const loginUser = async (userData: object) => {
  const response = await axios.post(API_URL + "/login", userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// Logout User

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  loginUser,
  logout,
};

export default authService;
