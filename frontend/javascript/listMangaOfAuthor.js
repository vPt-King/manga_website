let author = JSON.parse(localStorage.getItem("author"));
let pageTitle = document.getElementById("show_page_title");
let mangaArea = document.getElementById("list_manga_detail");
let paginateArea = document.getElementById("paginate_show");
pageTitle.innerHTML += author;
let queryName = author.replace(/\.|\s/g, "_");
fetchMangaAndLoadPaginateRelated(mangaArea, paginateArea, `http://localhost:3000/listMangaOfAuthor?author=${queryName}`)

function catchOnclickPageAndSwitch(event)
{
    let page = parseInt(event.target.textContent);
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    fetchMangaAndLoadPaginateRelated(mangas, mangaArea, paginateArea, page);
}