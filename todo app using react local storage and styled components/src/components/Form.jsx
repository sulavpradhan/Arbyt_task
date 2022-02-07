import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Input } from "./styles/Input.styled";
import { TiDocumentAdd } from "react-icons/ti";

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
      <Input
        width="450px"
        type="text"
        placeholder="Enter ToDo:"
        value={formData}
        onChange={onChangeHandler}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "#dae3f1",
          border: "none",
          margin: "5px",
          borderRadius: "5px",
        }}
      >
        <TiDocumentAdd
          style={{
            height: "34px",
            width: "34px",
            color: "#6a8ec8",
          }}
        />
      </button>
    </form>
  );
};

export default Form;
