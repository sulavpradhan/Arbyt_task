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
    console.log("from useeffect");
    if (isError) {
      console.log("there has been an error ", message);
    }
    console.log("after error");
    dispatch(showAllArticle());
  }, [isError, message]);

  const onChangeHandler = (id: string) => {
    console.log(id);
  };

  console.log(article);
  console.log(articles);

  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {article.map((item) => {
          return (
            <li
              className="Repo"
              key={item.id}
              style={{ border: "solid" }}
              onClick={() => onChangeHandler(item.id)}
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
