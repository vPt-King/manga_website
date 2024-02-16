function numberOfPage(numberOfManga) {
    let res = numberOfManga / 25;
    if (Number.isInteger(res)) {
      return res;
    } else {
      return Math.ceil(res);
    }
}

function showMangasInSpecificPage(mangaData, mangaElement, paginateElement, page){
    let pages = numberOfPage(mangaData.length)
    mangaElement.innerHTML = "";
    lastCountedManga = page*25;
    firstCountedManga = lastCountedManga - 25;
    for(let i = firstCountedManga; i < lastCountedManga; i++){
        if(mangaData[i]){
            mangaElement.innerHTML += `<li class="manga">
                <a href="#">
                    <img src="${mangaData[i].img}" alt="">
                    <h3 class="manga_name">${mangaData[i].name}</h3>
                    <h3>Chương: ${mangaData[i].chapter}</h3>
                    <h3>Lượt xem: ${mangaData[i].view}</h3>
                </a>
            </li>`; 
        }
    }

    paginateElement.innerHTML = "";
    for(let i = 1; i <= pages; i++)
    {
        let htmlString = '';
        if(page != i){
        htmlString = `<li class="list_page_detail" onclick="catchOnclickPageAndSwitch(event)">${i}</li>`;
        }
        else{
            htmlString = `<li class="list_page_detail" style="background-color: #00a5f0;" onclick="catchOnclickPageAndSwitch(event)">
            ${i}
            </li>`;
        }
        paginateElement.innerHTML += htmlString;
    }
}

function fetchMangaAndLoadPaginateRelated(mangaElement, paginateElement,url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        data = Object.values(data);
        localStorage.setItem("mangas", JSON.stringify(data));
        showMangasInSpecificPage(data,mangaElement, paginateElement, 1);
    })
    .catch(function(error){
        console.log(error);
    })
}

