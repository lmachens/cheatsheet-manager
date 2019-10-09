import React from "react";
import styled from "styled-components";

const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;
`;

export default function ListItem() {
  return <StyledLi>ListItem</StyledLi>;
}
