import axios, { Axios } from "axios";

const baseApi: Axios = axios.create({
  baseURL: "http://localhost:8080",
});

export default baseApi;
