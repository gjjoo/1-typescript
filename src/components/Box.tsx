import React from "react";
import styled from "styled-components";

const Box: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: yellow;
`;

export default Box;
