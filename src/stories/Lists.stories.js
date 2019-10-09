import React from "react";
import ListItem from "../components/ListItem";
import List from "../components/List";

export default {
  title: "Lists"
};

export const ExampleList = () => {
  const [active, setActive] = React.useState("html");
  return (
    <List>
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
    </List>
  );
};
