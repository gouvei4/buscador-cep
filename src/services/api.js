import axios from "axios";

// 1310930/json

const api = axios.create ({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;