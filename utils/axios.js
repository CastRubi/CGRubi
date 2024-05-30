// axios.js
import axiosLib from "axios";

const axios = axiosLib.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  headers: {
    Accept: "application/vnd.api+json",
  },
});

export default axios;


