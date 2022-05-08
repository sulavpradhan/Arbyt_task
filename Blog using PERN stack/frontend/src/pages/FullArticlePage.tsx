import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { getSingleArticle } from "../features/articles/articleSlice";

const FullArticlePage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { article, articles, isError, isSuccess, isLoading, message } =
    useSelector((state: RootState) => state.article);

  console.log(article.title);
  const { id } = useParams();

  useEffect(() => {
    // todo: dispatch function to get the full article
    if (isError) {
      console.log("there has been an error ", message);
    }
    dispatch(getSingleArticle(id));
  }, [isError, message]);

  return (
    <div>
      <h1>{article.title}</h1>
      <h2>{`"${article.excerpt}"`}</h2>
      <p>{article.content}</p>
    </div>
  );
};

export default FullArticlePage;
