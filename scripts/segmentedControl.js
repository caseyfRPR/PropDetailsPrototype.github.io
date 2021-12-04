// Constants

const SEGMENTED_CONTROL_BASE_SELECTOR = ".segmented-control-2";
const SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR = ".segmented-control-2 .option input";
const SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR = ".segmented-control-2 .selection";


// Main

document.addEventListener("DOMContentLoaded", setup);

// Body functions

function setup() {
  forEachElement(SEGMENTED_CONTROL_BASE_SELECTOR, elem => {
    elem.addEventListener("change", updatePillPosition);
  })
  window.addEventListener("resize", updatePillPosition); // Prevent pill from detaching from element when window resized. 
}

function updatePillPosition() {
  forEachElement(SEGMENTED_CONTROL_INDIVIDUAL_SEGMENT_SELECTOR, (elem, index) => {
    if (elem.checked) moveBackgroundPillToElement(elem, index);
  })
}

function moveBackgroundPillToElement(elem, index) {
  document.querySelector(SEGMENTED_CONTROL_BACKGROUND_PILL_SELECTOR).style.transform = "translateX(" + (elem.offsetWidth * index) + "px)";
}

// Helper functions

function forEachElement(className, fn) {
  Array.from(document.querySelectorAll(className)).forEach(fn);
}
