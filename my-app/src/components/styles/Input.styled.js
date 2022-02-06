import styled from "styled-components";

export const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
  outline: none;
  width: ${({ width }) => width};
`;
