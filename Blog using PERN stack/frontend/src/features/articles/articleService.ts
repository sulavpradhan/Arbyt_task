import axios from "axios";

const API_URL = "/article";

const showAllArticle = async () => {
  const response = await axios.get(API_URL + "/all");
  console.log("RESPONSE>>", response);
  return response.data;
};
const articleService = { showAllArticle };
export default articleService;
