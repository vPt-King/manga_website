$(function () {
    $("#header_page").load("../html/templates/header.html", ()=>{
        const searchContent = document.getElementById("search_input");
        searchContent.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
            const name = searchContent.value;
            let data = {
                name:name
            }
            fetch("http://localhost:3000/search-manga-by-name",{
                method: "POST",
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' }
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                let searchData = {
                    search: name,
                    mangas: data
                }
                localStorage.setItem("searchData", JSON.stringify(searchData));
                window.location.href = "/frontend/html/listMangaBySearch.html";
            })

        }
        });
        let search_overlay = document.getElementById("search_overlay");
        search_overlay.addEventListener("click",(event)=> {
            searchContent.value = "";
        })
    });
})

$(function () {
    $("#footer_page").load("../html/templates/footer.html");
})


