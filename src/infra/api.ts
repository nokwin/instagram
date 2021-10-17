import axios from "axios";
import { envConfig } from "./env-config";

export const api = axios.create({
  baseURL: envConfig.apiUrl,
});
