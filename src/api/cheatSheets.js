async function fetchCheatSheets() {
  return fetch("http://localhost:3000/cheatSheets").then(response =>
    response.json()
  );
}

export async function getGroupedCheatSheets() {
  const cheatSheets = await fetchCheatSheets();
  const groups = cheatSheets.reduce((acc, current) => {
    acc[current.category] = [current, ...(acc[current.category] || [])];
    return acc;
  }, {});
  return groups;
}
