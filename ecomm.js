const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
function handle() {
  location.assign("././payment.html");
}
function order(e) {
  e.preventDefault();
  location.assign("././success.html");
}
