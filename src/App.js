import React from "react";
import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { getGroupedCheatSheets } from "./api/cheatSheets";

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Navigation = styled.aside`
  width: 300px;
  background-color: #414958;
  text-align: center;
  padding: 10px 6px;
`;

const Main = styled.main`
  flex: 1;
  padding: 20px;
`;

function App() {
  const [active, setActive] = React.useState(null);
  const [groupedCheatSheets, setGroupedCheatSheets] = React.useState([]);

  React.useEffect(() => {
    getGroupedCheatSheets().then(groupedCheatSheets => {
      setGroupedCheatSheets(groupedCheatSheets);
      setActive(groupedCheatSheets.html[0]);
    });
  }, []);

  return (
    <Container>
      <GlobalStyle />
      <Navigation>
        <List>
          {Object.entries(groupedCheatSheets).map(([group, cheatSheets]) => (
            <ListItem
              key={group}
              active={active && active.category === group}
              details={cheatSheets.map(cheatSheet => (
                <ListItem
                  key={cheatSheet.title}
                  onClick={() => setActive(cheatSheet)}
                  active={active && active.title === cheatSheet.title}
                  indent
                >
                  {cheatSheet.title}
                </ListItem>
              ))}
              onClick={() => {
                setActive(cheatSheets[0]);
              }}
            >
              {group}
            </ListItem>
          ))}
        </List>
      </Navigation>
      <Main>
        {active && active.title}
        {active && active.details}
      </Main>
    </Container>
  );
}

export default App;
