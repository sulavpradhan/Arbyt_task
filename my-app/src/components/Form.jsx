import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addToDoItem }) => {
  const [formData, setFormData] = useState("");

  const onSubmithandler = (e) => {
    e.preventDefault();
    if (formData === "") {
      toast.error("the filed is empty");
    } else {
      const newData = formData;
      addToDoItem(newData);
      setFormData("");
    }
  };

  const onChangeHandler = (e) => {
    setFormData(e.target.value);
  };

  return (
    <form onSubmit={onSubmithandler}>
      <input
        type="text"
        placeholder="Enter ToDo:"
        value={formData}
        onChange={onChangeHandler}
      />
      <button type="submit">add ToDo:</button>
    </form>
  );
};

export default Form;
