import axios from "axios";
export const axiosClient = (function() {
  console.log(process.env.API_ADDRESS)
  return axios.create({ baseURL: process.env.API_ADDRESS });
})()
