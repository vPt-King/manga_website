let pageTitle = document.getElementById("show_title_page");
let data = JSON.parse(localStorage.getItem("mangas"));
console.log(data);
pageTitle.innerHTML += data.search;