const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://dog.ceo/api/breeds/image/random";

async function fetchHandler() { // Асинхронна функція, яка виконує запит до API та оновлює зображення
  try {
    const response = await fetch(url); // Виконуємо запит до API
    const data = await response.json(); // Перетворюємо відповідь в JSON
    image.src = data.message; // Встановлюємо URL нового зображення
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", () => { // Додаємо обробник події "click" до кнопки
  let isLoaded = image.complete;   // Перевіряємо, чи завантажене попереднє зображення
 
  if (isLoaded) { // Якщо зображення завантажено, викликаємо функцію fetchHandler
    fetchHandler();
  }
});