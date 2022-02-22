import axios from "axios";

const wikipedia = axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  timeout: 1000,
});

export default wikipedia;
