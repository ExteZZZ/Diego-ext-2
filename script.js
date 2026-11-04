let score = 0;
19
const bouton = document.querySelector("#bouton");
const affichageScore = document.querySelector("#score");
const message = document.querySelector("#message");
function ajouterUnPoint() {
score = score + 1;
affichageScore.textContent = score;
if (score >= 10) {
message.textContent = "Objectif atteint !";
}
}
bouton.addEventListener("click", ajouterUnPoint);
