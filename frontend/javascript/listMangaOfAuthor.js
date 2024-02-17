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

function sortByViewDay(event){
    let showOption = document.getElementById("show_option");
    showOption.innerHTML = "Xem nhiều nhất trong ngày";
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    mangas.sort((a, b) => {
        return b.view_day - a.view_day;
    });
    localStorage.setItem("mangas", JSON.stringify(mangas));
    let mangaArea = document.getElementById("list_manga_detail");
    let paginateArea = document.getElementById("paginate_show");
    showMangasInSpecificPage(mangas, mangaArea, paginateArea, 1);
}

function sortByViewWeek(event){
    let showOption = document.getElementById("show_option");
    showOption.innerHTML = "Xem nhiều nhất trong tuần";
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    mangas.sort((a, b) => {
        return b.view_week - a.view_week;
    });
    localStorage.setItem("mangas", JSON.stringify(mangas));
    let mangaArea = document.getElementById("list_manga_detail");
    let paginateArea = document.getElementById("paginate_show");
    showMangasInSpecificPage(mangas, mangaArea, paginateArea, 1);
}

function sortByViewMonth(event){
    let showOption = document.getElementById("show_option");
    showOption.innerHTML = "Xem nhiều nhất trong tháng";
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    mangas.sort((a, b) => {
        return b.view_month - a.view_month;
    });
    localStorage.setItem("mangas", JSON.stringify(mangas));
    let mangaArea = document.getElementById("list_manga_detail");
    let paginateArea = document.getElementById("paginate_show");
    showMangasInSpecificPage(mangas, mangaArea, paginateArea, 1);
}