import axios from "axios";

const API_URL = "/article";

const showAllArticle = async () => {
  const response = await axios.get(API_URL + "/all");
  return response.data;
};

const getSingleArticle = async (id: string | undefined) => {
  const response = await axios.get(API_URL + `/read/${id}`);
  return response.data;
};
const articleService = { showAllArticle, getSingleArticle };
export default articleService;
