import "./styles.css";

function appendGreeting() {
  const div = document.createElement("div");
  div.textContent = "Hello world!!!";

  // stop devserver, remove responsive modifier (md:), start again
  div.classList.add("md:pl-4");

  const app = document.body.querySelector("#app");
  app.appendChild(div);
}

appendGreeting();

export default {};
