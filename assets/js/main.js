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


// 2. navbar toggle button add class active to id #navbar-toggle then remove it after 2s


// button style


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
