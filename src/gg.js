const productCardContainer = document.querySelector('.product-card-container');
const productCards = document.querySelector('.product-cards');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

const CARD_WIDTH = 250; // Width of each product card (adjust if needed)
const CARDS_TO_SCROLL = 3; // Number of cards to scroll at a time

scrollLeftButton.addEventListener('click', () => {
  // Check if there are enough cards to scroll left
  if (productCards.scrollLeft > 0) {
    productCards.scrollLeft -= CARD_WIDTH * CARDS_TO_SCROLL;
    // Enable right button if it was disabled
    if (scrollRightButton.disabled) {
      scrollRightButton.disabled = false;
    }
  }
  // Disable left button if scrolled to the beginning
  if (productCards.scrollLeft === 0) {
    scrollLeftButton.disabled = true;
  }
});

scrollRightButton.addEventListener('click', () => {
  // Check if there are enough cards remaining to scroll right
  const scrollRightAmount = productCards.scrollWidth - productCards.scrollLeft - productCardContainer.clientWidth;
  if (scrollRightAmount > 0) {
    productCards.scrollLeft += Math.min(scrollRightAmount, CARD_WIDTH * CARDS_TO_SCROLL);
    // Enable left button if it was disabled
    if (scrollLeftButton.disabled) {
      scrollLeftButton.disabled = false;
    }
  }
  // Disable right button if scrolled to the end
  if (productCards.scrollLeft === productCards.scrollWidth - productCardContainer.clientWidth) {
    scrollRightButton.disabled = true;
  }
});