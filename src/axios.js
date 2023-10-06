import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/challenge-bcdd5/us-central1/api", // The Api (Cloud function)URL
});
export default instance;
