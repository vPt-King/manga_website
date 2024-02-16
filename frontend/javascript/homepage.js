let showManga = document.getElementById("list_manga_detail");
let paginatePage = document.getElementById("paginate_show");
fetchMangaAndLoadPaginateRelated(showManga, paginatePage, "http://localhost:3000/")

function catchOnclickPageAndSwitch(event){
    let page = event.target.textContent;
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    showMangasInSpecificPage(mangas, showManga, paginatePage, page);
}