const footballTeam = {
  team: "Wild Tigers",
  year: 2025,
  headCoach: "Alex Morgan",
  players: [
    { name: "John Smith", position: "forward", isCaptain: false },
    { name: "Maria Lopez", position: "midfielder", isCaptain: true },
    { name: "David Kim", position: "defender", isCaptain: false },
    { name: "Sarah Lee", position: "goalkeeper", isCaptain: false }
  ]
};

const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const select = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

// Set team info
headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;

// Function to render players
function renderPlayers(filteredPlayers) {
  // Clear previous cards
  playerCards.innerHTML = "";

  // Loop and create cards
  filteredPlayers.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    const name = document.createElement("h2");
    name.textContent = player.isCaptain ? `(Captain) ${player.name}` : player.name;

    const pos = document.createElement("p");
    pos.textContent = `Position: ${player.position}`;

    card.appendChild(name);
    card.appendChild(pos);
    playerCards.appendChild(card);
  });
}

// Initial render: show all players
renderPlayers(footballTeam.players);

// Listen to dropdown changes
select.addEventListener("change", () => {
  const selected = select.value;

  if (selected === "all") {
    renderPlayers(footballTeam.players);
  } else {
    const filtered = footballTeam.players.filter(player => player.position === selected);
    renderPlayers(filtered);
  }
});
