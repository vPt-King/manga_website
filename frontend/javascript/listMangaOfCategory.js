const category = JSON.parse(localStorage.getItem("category"));
let showManga = document.getElementById("list_manga_detail");
let paginatePage = document.getElementById("paginate_show");
let title = document.getElementById("show_page_title");
title.innerHTML += category;
fetchMangaAndLoadPaginateRelated(showManga, paginatePage, `http://localhost:3000/listMangaOfCategory?category=${category}`)

function catchOnclickPageAndSwitch(event){
    let page = parseInt(event.target.textContent);
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    showMangasInSpecificPage(mangas, showManga, paginatePage, page);
}


