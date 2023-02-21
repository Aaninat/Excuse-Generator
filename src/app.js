/* eslint-disable */
import "bootstrap";
import "./style.css";

function excusa(who, action, what, when) {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomWho = Math.floor(Math.random() * who.length);
  let randomAction = Math.floor(Math.random() * action.length);
  let randomWhat = Math.floor(Math.random() * what.length);
  let randomWhen = Math.floor(Math.random() * when.length);

  let resultado =
    who[randomWho] +
    " " +
    action[randomAction] +
    " " +
    what[randomWhat] +
    " " +
    when[randomWhen];
  console.log(resultado);

  document.getElementById("excusa").innerHTML = resultado;
}

window.onload = function() {
  excusa();
};
document.querySelector("button").addEventListener("click", excusa);
