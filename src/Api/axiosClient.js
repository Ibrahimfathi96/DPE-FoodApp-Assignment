import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com",
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    const { status } = JSON.parse(JSON.stringify(error));
    throw (status === 500 && "Internal Server Error") || "";
  }
);
export default axiosClient;
