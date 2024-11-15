const colorButtons = document.querySelectorAll(".color-btn");
const chairImages = document.querySelectorAll(".img-wrap");
const backColors = document.querySelectorAll(".back-color");

colorButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    chairImages.forEach((image) => (image.style.opacity = 0));
    backColors.forEach((color) => (color.style.opacity = 0));

    chairImages[index].style.opacity = 1;
    chairImages[index].classList.add("shake");
    backColors[index].style.opacity = 1;

    setTimeout(() => {
      chairImages[index].classList.remove("shake");
    }, 700);
  });
});

const descButtons = document.querySelectorAll(".desc-btn");
const descSections = document.querySelectorAll(".desc-sec");

descButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    descSections.forEach((section) => (section.style.opacity = 0));
    descSections[index].style.opacity = 1;
  });
});

const addToCartButton = document.querySelector(".add-to-cart");
addToCartButton.addEventListener("click", () => {
  alert("Produto adicionado ao carrinho!");
});
