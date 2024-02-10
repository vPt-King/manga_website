// function render paginate html when start browser
let showManga = document.getElementById("list_manga_detail");
let paginatePage = document.getElementById("paginate_show");
fetchMangaAndLoadPaginateRelated(showManga, paginatePage, "http://localhost:3000/?page=1")

// load paginate and manga when click switch page
function catchOnclickPageAndSwitch(event){
    let page = parseInt(event.target.textContent);
    let mangaArea = document.getElementById("list_manga_detail");
    let paginateArea = document.getElementById("paginate_show");
    mangaArea.innerHTML = "";
    paginateArea.innerHTML = "";
    fetchMangaAndLoadPaginateRelated(showManga, paginateArea, `http://localhost:3000/?page=${page}`);
}



