let burgerKing = document.querySelector(".burger-king");
let cheese = document.querySelector(".cheese");
let onion = document.querySelector(".onion");
let salad = document.querySelector(".salad");
let tomato = document.querySelector(".tomato");
let pickle = document.querySelector(".pickle");
let cheeseBtn = document.querySelector(".cheese-btn");
let meatBtn = document.querySelector(".meat-btn");
let onionBtn = document.querySelector(".onion-btn");
let saladBtn = document.querySelector(".salad-btn");
let tomatoBtn = document.querySelector(".tomato-btn");
let pickleBtn = document.querySelector(".pickle-btn");
let burger = document.querySelector(".burger");
let breadTop = document.querySelector(".bread-top");
let breadBottom = document.querySelector(".bread-bottom");
let total = document.querySelector(".total");
let food = document.querySelector(".food");
let price = 2;

total.textContent = 2;

let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  food.innerHTML = "";
  total.innerHTML = "2";
  breadTop.style.transform = `translateY(50px)`;
});

let tr = 0;
let ind = 0;
let bind = 0;
let btop = 0;

cheeseBtn.addEventListener("click", () => {
  price += 2;
  tr -= 20;
  ind++;
  bind += 2;
  btop -= 15;
  let img = document.createElement("img");
  food.prepend(img);
  img.setAttribute("src", "../images/cheese.svg");
  img.style.transform = `translateY(${tr}px)`;
  img.style.zIndex = `${ind}`;
  img.style.position = "absolute";
  breadTop.style.transform = `translateY(${btop}px)`;
  breadTop.style.zIndex = `${bind}`;
  total.textContent = `${price}`;

  img.addEventListener("click", () => {
    price -= 2;
    tr += 20;
    btop += 15;
    img.remove("src", "../images/cheese.svg");
    breadTop.style.transform = `translateY(${btop}px)`;
    img.style.transform = `translateY(${tr}px)`;
    total.textContent = `${price}`;
  });
});

meatBtn.addEventListener("click", () => {
  price += 5;
  tr -= 20;
  ind++;
  bind += 2;
  btop -= 20;
  let img = document.createElement("img");
  food.prepend(img);
  img.setAttribute("src", "../images/meat.svg");
  img.style.transform = `translateY(${tr}px)`;
  img.style.zIndex = `${ind}`;
  img.style.position = "absolute";
  breadTop.style.transform = `translateY(${btop}px)`;
  breadTop.style.zIndex = `${bind}`;
  total.textContent = `${price}`;

  img.addEventListener("click", () => {
    price -= 5;
    tr += 20;
    btop += 20;
    img.remove("src", "../images/meat.svg");
    breadTop.style.transform = `translateY(${btop}px)`;
    img.style.transform = `translateY(${tr}px)`;
    total.textContent = `${price}`;
  });
});

onionBtn.addEventListener("click", () => {
  price += 1;
  tr -= 20;
  ind++;
  bind += 2;
  btop -= 20;
  let img = document.createElement("img");
  food.prepend(img);
  img.setAttribute("src", "../images/onion.svg");
  img.style.transform = `translateY(${tr}px)`;
  img.style.zIndex = `${ind}`;
  img.style.position = "absolute";
  breadTop.style.transform = `translateY(${btop}px)`;
  breadTop.style.zIndex = `${bind}`;
  total.textContent = `${price}`;

  img.addEventListener("click", () => {
    price -= 1;
    tr += 20;
    btop += 20;
    img.remove("src", "../images/onion.svg");
    breadTop.style.transform = `translateY(${btop}px)`;
    img.style.transform = `translateY(${tr}px)`;
    total.textContent = `${price}`;
  });
});

saladBtn.addEventListener("click", () => {
  price += 1;
  tr -= 20;
  ind++;
  bind += 2;
  btop -= 20;
  let img = document.createElement("img");
  food.prepend(img);
  img.setAttribute("src", "../images/salad.svg");
  img.style.transform = `translateY(${tr}px)`;
  img.style.zIndex = `${ind}`;
  img.style.position = "absolute";
  breadTop.style.transform = `translateY(${btop}px)`;
  breadTop.style.zIndex = `${bind}`;
  total.textContent = `${price}`;

  img.addEventListener("click", () => {
    price -= 1;
    tr += 20;
    btop += 20;
    img.remove("src", "../images/salad.svg");
    breadTop.style.transform = `translateY(${btop}px)`;
    img.style.transform = `translateY(${tr}px)`;
    total.textContent = `${price}`;
  });
});

tomatoBtn.addEventListener("click", () => {
  price += 2;
  tr -= 20;
  ind++;
  bind += 2;
  btop -= 20;
  let img = document.createElement("img");
  food.prepend(img);
  img.setAttribute("src", "../images/tomato.svg");
  img.style.transform = `translateY(${tr}px)`;
  img.style.zIndex = `${ind}`;
  img.style.position = "absolute";
  breadTop.style.transform = `translateY(${btop}px)`;
  breadTop.style.zIndex = `${bind}`;
  total.textContent = `${price}`;

  img.addEventListener("click", () => {
    price -= 2;
    tr += 20;
    btop += 20;
    img.remove("src", "../images/tomato.svg");
    breadTop.style.transform = `translateY(${btop}px)`;
    img.style.transform = `translateY(${tr}px)`;
    total.textContent = `${price}`;
  });
});

pickleBtn.addEventListener("click", () => {
  price += 3;
  tr -= 20;
  ind++;
  bind += 2;
  btop -= 20;
  let img = document.createElement("img");
  food.prepend(img);
  img.setAttribute("src", "../images/pickle.svg");
  img.style.transform = `translateY(${tr}px)`;
  img.style.zIndex = `${ind}`;
  img.style.position = "absolute";
  breadTop.style.transform = `translateY(${btop}px)`;
  breadTop.style.zIndex = `${bind}`;
  total.textContent = `${price}`;

  img.addEventListener("click", () => {
    price -= 3;
    tr += 20;
    btop += 20;
    img.remove("src", "../images/pickle.svg");
    breadTop.style.transform = `translateY(${btop}px)`;
    img.style.transform = `translateY(${tr}px)`;
    total.textContent = `${price}`;
  });
});

let page = document.querySelector(".page");
let sub = document.querySelector(".submit");
let check = document.querySelector(".check");

sub.addEventListener("click", () => {
  let sum = Math.round(Math.random() * 25 + 10);
  check.textContent = `${sum}`;
});
