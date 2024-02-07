let score1 = 0;
let score2 = 0;

function updateScores() {
    document.getElementById("score1").textContent = score1;
    document.getElementById("score2").textContent = score2;
}

function incrementScore(team) {
    if (team === 1) {
        score1++;
    } else if (team === 2) {
        score2++;
    }
    updateScores();
}

function resetScore() {
    score1 = 0;
    score2 = 0;
    document.getElementById("winner").textContent = "";
    updateScores();
}

function showWinner() {
    let winner;
    if (score1 > score2) {
        winner = "Team 1 🏆";
    } else if (score2 > score1) {
        winner = "Team 2 🏆";
    } else {
        winner = "It's a tie!";
    }
    document.getElementById("winner").textContent = `Winner: ${winner}`;
}