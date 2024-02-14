// load category list to the header.html
fetch("http://localhost:3000/category")
.then(function(response){
    return response.json();
})
.then((categories)=>{
    let categoryList = document.getElementById("show_real_category");
    categoryList.innerHTML = "";
    categories.forEach(category => {
        categoryList.innerHTML += `<li onclick="redirectToListMangaOfCategory(event)"><a href="#">${category.name}</a></li>`
    });
})

function redirectToListMangaOfCategory(event){
    let category = event.target.textContent.toLowerCase();
    dataCategory = {
        category: category,
        page: 1
    }
    localStorage.setItem("dataCategory", JSON.stringify(dataCategory));
    window.location.href = "/frontend/html/listMangaByCategory.html";
}