import React from "react";
import { Input } from "./styles/Input.styled";

const SearchBox = ({ search, setSearch }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        width="500px"
        type="text"
        placeholder="Search todo:"
        value={search}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default SearchBox;
