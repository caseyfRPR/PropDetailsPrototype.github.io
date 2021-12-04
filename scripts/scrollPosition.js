let page = document.querySelector(".pinNav");

let top = localStorage.getItem("subnav-scroll");
if (top !== null) {
  page.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("subnav-scroll", sidebar.scrollTop);
});
