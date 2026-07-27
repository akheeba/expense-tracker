import axios from "axios";

const API = axios.create({
  baseURL: "https://expense-tracker-server-s9te.onrender.com/api",
});

export default API;