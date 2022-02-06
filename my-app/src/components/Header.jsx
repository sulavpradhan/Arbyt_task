import React from "react";
import { StyledHeader } from "./styles/StyledHeader.styled";
import { BiTask } from "react-icons/bi";

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <BiTask /> To Do
      </h1>
    </StyledHeader>
  );
};

export default Header;
