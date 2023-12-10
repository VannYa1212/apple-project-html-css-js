// 1. loading page add class loading to id #loading then remove it after 2s

function loading() {
  const loading = document.querySelector("#loading");
  const body = document.querySelector("body");
  loading.classList.add("loading");
  body.classList.add("noscroll");
  setTimeout(() => {
    loading.classList.remove("loading");
    body.classList.remove("noscroll");
  }, 1000);
}
loading();

// back to top
const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

// click to scroll top
backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// 2. navbar toggle button add class active to id #navbar-toggle then remove it after 2s

const video1 = document.getElementById("video1");
const playBtn1 = document.getElementById("playBtn1");
const videoplay = () => {
  if (video1.paused) {
    video1.play();
    playBtn1.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
  } else {
    video1.pause();
    playBtn1.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
  }
}
videoplay();





// fetch api data
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

fetch("https://fakestoreapi.com/products/categories")
  .then((res) => res.json())
  .then((res) => console.log(res));

fetch("https://fakestoreapi.com/products/category/jewelery")
  .then((res) => res.json())
  .then((res) => console.log(res));
