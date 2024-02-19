$(function () {
    $("#header_page").load("../html/templates/header.html", () => {
        const searchContent = document.getElementById("search_input");
        const searchLabel = document.getElementById("label_search");
        searchLabel.addEventListener('click', handleSearchByClick);
        searchContent.addEventListener('keyup', handleSearchByEnter);
        let search_overlay = document.getElementById("search_overlay");
        function handleSearchByEnter(event) {
            if (event.keyCode === 13) {
                const name = searchContent.value;
                if (!name || /^\s+$/.test(name)) {
                    alert("Bạn không được để trống tên truyện")
                }
                else {
                    let data = {
                        name: name
                    }
                    fetch("http://localhost:3000/search-manga-by-name", {
                        method: "POST",
                        body: JSON.stringify(data),
                        headers: { 'Content-Type': 'application/json' }
                    })
                        .then((res) => {
                            return res.json()
                        })
                        .then((data) => {
                            let searchData = {
                                search: name,
                                mangas: data
                            }
                            localStorage.setItem("searchData", JSON.stringify(searchData));
                            window.location.href = "/frontend/html/listMangaBySearch.html";
                        })
                }
            }
        }

        function handleSearchByClick(event) {
            const name = searchContent.value;
            if (!name || /^\s+$/.test(name)) {
                alert("Bạn không được để trống tên truyện")
            }
            else {
                let data = {
                    name: name
                }
                fetch("http://localhost:3000/search-manga-by-name", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: { 'Content-Type': 'application/json' }
                })
                    .then((res) => {
                        return res.json()
                    })
                    .then((data) => {
                        let searchData = {
                            search: name,
                            mangas: data
                        }
                        localStorage.setItem("searchData", JSON.stringify(searchData));
                        window.location.href = "/frontend/html/listMangaBySearch.html";
                    })
            }
        }
        // search_overlay.addEventListener("click",(event)=> {
        //     searchContent.value = "";
        // })
    });
})

$(function () {
    $("#footer_page").load("../html/templates/footer.html");
})


