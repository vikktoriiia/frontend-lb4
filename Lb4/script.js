// ЗАВДАННЯ 1
// 10-й елемент — пошук за ID
const element10 = document.getElementById("element10");
// 11-й елемент — пошук за класом
const element11 = document.querySelector(".element11");
// Функція зміни кольорів
function changeColors(element) {
    element.classList.toggle("changed");
}
// Натискання на 10-й елемент
element10.addEventListener("click", function () {
    changeColors(element10);
});
// Натискання на 11-й елемент
element11.addEventListener("click", function () {
    changeColors(element11);
});
// ЗАВДАННЯ 2
// Отримуємо контейнер із зображенням
const imageContainer = document.getElementById("image-container");
// Зберігаємо посилання на фотографію
const imageSrc = document.getElementById("city-image").src;
// Початкова ширина зображення
const initialWidth = 500;
// Кнопка "Додати"
document.getElementById("add-btn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "https://www.journeys6senses.com/uzhgorod-velykiy-gaid/";
    link.target = "_blank";
    link.rel = "noopener noreferrer";

    const newImage = document.createElement("img");
    newImage.src = imageSrc;
    newImage.alt = "Місто Ужгород";
    newImage.style.width = initialWidth + "px";

    link.appendChild(newImage);
    imageContainer.appendChild(link);
});
// Кнопка "Збільшити"
document.getElementById("increase-btn").addEventListener("click", function () {
    const images = imageContainer.querySelectorAll("img");

    images.forEach(function (image) {
        const width = image.getBoundingClientRect().width;
        image.style.width = (width + 50) + "px";
    });
});
// Кнопка "Зменшити"
document.getElementById("decrease-btn").addEventListener("click", function () {
    const images = imageContainer.querySelectorAll("img");

    images.forEach(function (image) {
        const width = image.getBoundingClientRect().width;

        if (width > 100) {
            image.style.width = Math.max(100, width - 50) + "px";
        }
    });
});
// Кнопка "Видалити"
document.getElementById("delete-btn").addEventListener("click", function () {
    const links = imageContainer.querySelectorAll("a");

    if (links.length > 0) {
        links[links.length - 1].remove();
    }
});
