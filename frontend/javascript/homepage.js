let showManga = document.getElementById("list_manga_detail");
let paginatePage = document.getElementById("paginate_show");
fetchMangaAndLoadPaginateRelated(showManga, paginatePage, "http://localhost:3000/")

function catchOnclickPageAndSwitch(event){
    let page = event.target.textContent;
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    showMangasInSpecificPage(mangas, showManga, paginatePage, page);
}

function sortAll(event)
{
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    mangas.sort((a, b) => {
        return b.view - a.view;
    });
    localStorage.setItem("mangas", JSON.stringify(mangas));
    let mangaArea = document.getElementById("list_manga_detail");
    let paginateArea = document.getElementById("paginate_show");
    showMangasInSpecificPage(mangas, mangaArea, paginateArea, 1);
}