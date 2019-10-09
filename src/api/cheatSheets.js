const cheatSheets = [
  {
    category: "html",
    title: "Semantic",
    details: "Semantic is important\nUse it."
  },
  {
    category: "html",
    title: "Body",
    details: "Body...."
  },
  {
    category: "html",
    title: "Footer",
    details: "Footer."
  },
  {
    category: "css",
    title: "Positions",
    details: "...."
  },
  {
    category: "css",
    title: "Modals",
    details: "...."
  }
];

async function fetchCheatSheets() {
  return cheatSheets;
}

export async function getGroupedCheatSheets() {
  const cheatSheets = await fetchCheatSheets();
  const groups = cheatSheets.reduce((acc, current) => {
    acc[current.category] = [current, ...(acc[current.category] || [])];
    return acc;
  }, {});
  return groups;
}
