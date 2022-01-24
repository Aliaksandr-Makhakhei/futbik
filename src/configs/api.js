import axios from "axios";
import { URLS } from "../constants";

const api = axios.create({
  baseURL: URLS.BASE,
  timeout: 30000,
});

export default api;