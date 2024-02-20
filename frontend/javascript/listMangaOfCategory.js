const category = JSON.parse(localStorage.getItem("category"));
let showManga = document.getElementById("list_manga_detail");
let paginatePage = document.getElementById("paginate_show");
let title = document.getElementById("show_page_title");
const categories_array = category.split("_");
categories_array.forEach(category => {
    title.innerHTML += category + " ";
});
fetchMangaAndLoadPaginateRelated(showManga, paginatePage, `http://localhost:3000/listMangaOfCategory?category=${category.toLowerCase()}`)

function catchOnclickPageAndSwitch(event){
    let page = parseInt(event.target.textContent);
    let mangas = JSON.parse(localStorage.getItem("mangas"));
    showMangasInSpecificPage(mangas, showManga, paginatePage, page);
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