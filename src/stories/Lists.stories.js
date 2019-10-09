import React from "react";
import ListItem from "../components/ListItem";

export default {
  title: "Lists"
};

export const TopLevelItem = () => <ListItem>HTML</ListItem>;
export const ActiveTopLevelItem = () => <ListItem active>CSS</ListItem>;
export const SubLevelItem = () => <ListItem indent>Semantic</ListItem>;
export const ActiveSubLevelItem = () => (
  <ListItem active indent>
    Positions
  </ListItem>
);

export const ExampleList = () => {
  const [active, setActive] = React.useState("html");
  return (
    <>
      <ListItem
        details={
          <>
            <ListItem indent>Semantic</ListItem>
            <ListItem indent>Header</ListItem>
            <ListItem indent>Inline</ListItem>
            <ListItem indent>Block</ListItem>
          </>
        }
        onClick={() => setActive("html")}
        active={active === "html"}
      >
        HTML
      </ListItem>

      <ListItem
        active={active === "css"}
        onClick={() => setActive("css")}
        details={
          <>
            <ListItem indent>Positions</ListItem>
          </>
        }
      >
        CSS
      </ListItem>
    </>
  );
};
