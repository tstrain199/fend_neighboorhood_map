var slideout = new Slideout({
  panel: document.getElementsByClassName("panel")[0],
  menu: document.getElementsByClassName("menu")[0],
  padding: 172,
  tolerance: 70
});
document.querySelector(".toggle-button").addEventListener("click", function() {
  slideout.toggle();
});
