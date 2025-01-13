// Задача 1 (легка)

// Напишіть JavaScript-код, щоб знайти та зберегти в змінні:
//  1. Елемент із id="header".
//  2. Всі елементи з класом item.

// HTML-код для задачі:

// <div id="header">Header Content</div>
// <ul>
//   <li class="item">Item 1</li>
//   <li class="item">Item 2</li>
//   <li class="item">Item 3</li>
// </ul>

// // Знайдіть елемент із id="header"
// // Знайдіть всі елементи з класом "item"

// const headerElem = document.querySelector("#header");
const headerElem = document.getElementById("header");
console.log(headerElem);

// const items = document.querySelectorAll(".item");
const items = document.getElementsByClassName("item");
console.log(items);

// Задача 2 (легка)

// Напишіть JavaScript-код, щоб знайти перший елемент у списку ul з класом menu.

// HTML-код для задачі:

// <ul class="menu">
//   <li>Home</li>
//   <li>About</li>
//   <li>Contact</li>
// </ul>

// // Знайдіть перший елемент списку з класом "menu"

const firstMenuItem = document.querySelector(".menu li");
console.log(firstMenuItem);

// Задача 3 (середня)

// Знайдіть всі кнопки (button) усередині елемента з id="form-container".

// HTML-код для задачі:

// <div id="form-container">
//   <button>Submit</button>
//   <button>Cancel</button>
// </div>

// // Знайдіть всі кнопки всередині елемента з id="form-container"

const allButtons = document.querySelectorAll("#form-container button");
console.log(allButtons);

// Задача 4 (середня)

// Напишіть JavaScript-код, щоб знайти всі елементи з атрибутом data-role="link" і вивести їх текстовий вміст у консоль.

// HTML-код для задачі:

// <a href="#" data-role="link">Home</a>
// <a href="#" data-role="link">About</a>
// <a href="#" data-role="link">Contact</a>

// // Знайдіть всі елементи з атрибутом data-role="link" і виведіть їх текст

const links = document.querySelectorAll('[data-role="link"]');
links.forEach((link) => {
  console.log(link.textContent);
});

// Задача 5 (складна)

// Напишіть JavaScript-код, щоб знайти всі вкладені елементи span усередині елемента з класом card, і змініть їх текстовий вміст на "Updated".

// HTML-код для задачі:

// <div class="card">
//   <h3>Title</h3>
//   <p>Text <span>Old</span></p>
//   <p>Text <span>Old</span></p>
// </div>

// // Знайдіть всі span всередині елемента з класом "card" і змініть їх текстовий вміст

// const cardSpans = document.querySelectorAll(".card span");
// cardSpans.forEach((span) => {
//   span.textContent = "Updated";
// });

const cardSpans = document.querySelectorAll(".card span");
for (const span of cardSpans) {
  span.textContent = "Updated";
}

// Задача 6 (складна)

// Знайдіть останній елемент у списку з id="dynamic-list". Якщо такого списку немає на сторінці, виведіть у консоль повідомлення "List not found".

// HTML-код для задачі:

// <ul id="dynamic-list">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>
// </ul>

// // Знайдіть останній елемент у списку з id="dynamic-list" або виведіть "List not found"

const dynamicList = document.getElementById("dynamic-list");

if (!dynamicList) {
  console.log("List not found");
} else {
  const lastItem = dynamicList.lastElementChild;
  console.log(lastItem);
}

// Ці задачі охоплюють основні методи роботи з DOM, такі як getElementById, querySelector, querySelectorAll, і getElementsByClassName, що допоможе початківцям освоїти базовий пошук елементів у DOM-дереві.
