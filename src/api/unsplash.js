import axios from "axios";
require("dotenv").config();

const REACT_APP_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${REACT_APP_ACCESS_KEY}`
  }
});
