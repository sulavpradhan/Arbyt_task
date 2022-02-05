import React from "react";

const SearchBox = ({ search, setSearch }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        placeholder="Search todo:"
        value={search}
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default SearchBox;
