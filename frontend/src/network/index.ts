import axios, { Axios } from "axios";

const baseApi: Axios = axios.create({
  baseURL: "http://localhost:8000",
});

export default baseApi;
