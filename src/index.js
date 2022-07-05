import generateJoke from "./generateJoke";
import "./styles/main.scss";
import helloworld from "./assets/hello-world.svg";

const laughImg = document.getElementById("laughImg");
laughImg.src = helloworld;

const jokeBtn = document
  .getElementById("jokeBtn")
  .addEventListener("click", generateJoke);

generateJoke();
