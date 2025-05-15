const items = document.querySelectorAll(".item");
const contents = document.querySelectorAll(".content");

items.forEach((item, itemIndex) => {
  item.addEventListener("click", () => {
    showContent(itemIndex);
  });
});

function showContent(itemIndex) {
  contents.forEach((content, index) => {
    if (index === itemIndex) {
      content.classList.toggle("hidden");
    } else {
      content.classList.add("hidden");
    }
  });
}
