import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://api.yourserver.com/v1",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default apiClient;
