const data = JSON.parse(localStorage.getItem("dataCategory"));
const category = data.category;
const page = data.page;
let showManga = document.getElementById("list_manga_detail");
let paginatePage = document.getElementById("paginate_show");
let title = document.getElementById("show_page_title");
title.innerHTML += category;
fetchMangaAndLoadPaginateRelated(showManga, paginatePage, `http://localhost:3000/listMangaOfCategory?category=${category}&page=1`)

function catchOnclickPageAndSwitch(event){
    let page = parseInt(event.target.textContent);
    showManga.innerHTML = "";
    paginatePage.innerHTML = "";
    fetchMangaAndLoadPaginateRelated(showManga, paginatePage, `http://localhost:3000/listMangaOfCategory?category=${category}&page=${page}`);
}


