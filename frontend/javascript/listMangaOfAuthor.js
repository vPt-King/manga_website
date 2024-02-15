let authorData = JSON.parse(localStorage.getItem("getMangaOfAuthor"));
let pageTitle = document.getElementById("show_page_title");
let mangaArea = document.getElementById("list_manga_detail");
let paginateArea = document.getElementById("paginate_show");
let authorName = authorData.author;
pageTitle.innerHTML += authorName;
let queryName = authorName.replace(/\.|\s/g, "_");
fetchMangaAndLoadPaginateRelated(mangaArea, paginateArea, `http://localhost:3000/listMangaOfAuthor?author=${queryName}&page=1`)

function catchOnclickPageAndSwitch(event)
{
    mangaArea.innerHTML = "";
    paginateArea.innerHTML = "";
    let page = parseInt(event.target.textContent);
    fetchMangaAndLoadPaginateRelated(mangaArea, paginateArea, `http://localhost:3000/listMangaOfAuthor?author=${queryName}&page=${page}`)
}