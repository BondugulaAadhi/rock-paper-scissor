const arr = ["rock", "paper", "scisor"];

let player;

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    player = btn.textContent;
    console.log("yours:" + player);
    let rand = showrand();
    console.log("comps:" + rand);
    if (rand == player) {
      console.log("tie");
    } else if (rand == "rock") {
      console.log(player == "paper" ? "You Win" : "You lose");
    } else if (rand == "paper") {
      console.log(player == "scisor" ? "You Win" : "You lose");
    } else if (rand == "scisor") {
      console.log(player == "rock" ? "You Win" : "You lose");
    }
  })
);
function showrand() {
  return arr[Math.floor(Math.random() * arr.length)];
}
