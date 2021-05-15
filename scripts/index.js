const EXTRA_CITY_CARDS = document.querySelector("#extra-cards");
const TOGGLE_VIEW_MORE = document.querySelector("#view-more");
EXTRA_CITY_CARDS.hidden = true;

function toggleExtraCities() {
  if (EXTRA_CITY_CARDS.hidden) {
    this.innerText = `View Less`;
  } else {
    this.innerText = `View More>>`;
  }
  EXTRA_CITY_CARDS.hidden = !EXTRA_CITY_CARDS.hidden;
}
TOGGLE_VIEW_MORE.addEventListener("click", toggleExtraCities);
