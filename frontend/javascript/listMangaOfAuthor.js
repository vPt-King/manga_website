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

function sortAll(event)
{
    let showOption = document.getElementById("show_option");
    showOption.innerHTML = "Xem nhiều nhất all";
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    mangas.sort((a, b) => {
        return b.view - a.view;
    });
    localStorage.setItem("mangas", JSON.stringify(mangas));
    let mangaArea = document.getElementById("list_manga_detail");
    let paginateArea = document.getElementById("paginate_show");
    showMangasInSpecificPage(mangas, mangaArea, paginateArea, 1);
}