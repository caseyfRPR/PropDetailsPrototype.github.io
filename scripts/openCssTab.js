document.querySelectorAll("label").forEach(p => {
  p.addEventListener("click", () => {
    event.target.parentElement.click();
  });
});
