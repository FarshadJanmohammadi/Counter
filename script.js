// Creat Element

const body = document.body;

const navbar_container = document.createElement("nav");
navbar_container.classList.add("navbar-conatiner");
body.appendChild(navbar_container);

const h1_navbar_container = document.createElement("h1");
h1_navbar_container.innerHTML = `Counter`;
navbar_container.appendChild(h1_navbar_container);

const container = document.createElement("main");
container.classList.add("container");
body.appendChild(container);

const h1_container = document.createElement("h1");
h1_container.innerHTML = "0";
container.appendChild(h1_container);

const container_button = document.createElement("div");
container_button.classList.add("container-button");
container.appendChild(container_button);

const container_button_1 = document.createElement("button");
container_button_1.setAttribute("id", "btn1");
container_button_1.innerText = "Decrement";
container_button.appendChild(container_button_1);

const container_button_2 = document.createElement("button");
container_button_2.setAttribute("id", "btn2");
container_button_2.innerText = "Reset";
container_button.appendChild(container_button_2);

const container_button_3 = document.createElement("button");
container_button_3.setAttribute("id", "btn3");
container_button_3.innerText = "Increment";
container_button.appendChild(container_button_3);

const sectionFooter = document.createElement("footer");
body.appendChild(sectionFooter);

const aFooter = document.createElement("a");
aFooter.setAttribute("href", "https://github.com/farshadjanmohammadi");
aFooter.setAttribute("target", "_blank");
aFooter.innerHTML = `Made with <i class="fas fa-heart"> </i>   by Farshad Janmohammadi`;
sectionFooter.appendChild(aFooter);

// End of Create Element

// function Handler
const buttonThreeHandler = () => {
  const count = h1_container.innerText;
  h1_container.innerText = Number(count) + 1;
  h1_container.style.color = "#27ae60";
};

const buttonTwoHandler = () => {
  h1_container.innerText = "0";
  h1_container.style.color = "#2980b9";
};

const buttonOneHandler = () => {
  const count = h1_container.innerText;
  h1_container.innerText = Number(count) - 1;
  h1_container.style.color = "#ed4c67";
};

//End of function Handler

//EventListener
container_button_1.addEventListener("click", buttonOneHandler);
container_button_2.addEventListener("click", buttonTwoHandler);
container_button_3.addEventListener("click", buttonThreeHandler);
//End of EventListener
