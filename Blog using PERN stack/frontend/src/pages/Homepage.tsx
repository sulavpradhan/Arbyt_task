import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../app/store";
import { showAllArticle, reset } from "../features/articles/articleSlice";

const Homepage = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { article, articles, isError, isSuccess, isLoading, message } =
    useSelector((state: RootState) => state.article);

  useEffect(() => {
    if (isError) {
      console.log("there has been an error ", message);
    }
    console.log("after error");
    dispatch(showAllArticle());
  }, [isError, message]);

  const onClickHandler = (id: string) => {
    navigate(`/article/read/${id}`);
  };

  console.log(articles);

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {articles.map((item) => {
          return (
            <li
              className="Repo"
              key={item.id}
              style={{ border: "solid" }}
              onClick={() => onClickHandler(item.id)}
            >
              <h2>{item.title}</h2>
              <h3 style={{ fontStyle: "italic", fontSize: "normal" }}>
                {item.excerpt}
              </h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Homepage;
