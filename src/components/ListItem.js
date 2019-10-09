import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import More from "../icons/More";
import Less from "../icons/Less";

function getColor(props) {
  if (props.active && props.indent) {
    return "#09d3ac";
  }
  if (props.active && !props.indent) {
    return "#09d3ac";
  }
  if (!props.active && props.indent) {
    return "#b7b7b7";
  }
  if (!props.active && !props.indent) {
    return "#fff";
  }
}
const StyledLi = styled.li`
  list-style: none;
  font-weight: bold;
  color: ${getColor};
  fill: ${getColor};
  cursor: pointer;
  margin-left: ${props => props.indent && "20px"};
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    color: #09d3ac;
  }
`;

export default function ListItem({
  active,
  children,
  details,
  indent,
  onClick
}) {
  const showMore = details && !active;
  const showLess = details && active;

  return (
    <>
      <StyledLi active={active} indent={indent} onClick={onClick}>
        {children}
        {showMore && <More />}
        {showLess && <Less />}
      </StyledLi>
      {active && details}
    </>
  );
}

ListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node.isRequired,
  indent: PropTypes.bool,
  details: PropTypes.node,
  onClick: PropTypes.func
};
