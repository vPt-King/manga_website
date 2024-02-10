function fetchMangaAndLoadPaginateRelated(mangaElement, paginateElement,url){
    fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        returnedData = Object.values(data);
        let numberOfPage = parseInt(returnedData[0]);
        let listData = returnedData[1];
        listData.forEach(data => {
            let html = `<li class="manga">
            <a href="#">
                <img src="${data.img}" alt="">
                <h3>${data.name}</h3>
                <h3>Chương: ${data.chapter}</h3>
            </a>
        </li>`;
        mangaElement.innerHTML += html;
        });

       
        for(let i = 1; i <= numberOfPage;i++)
        {
            let htmlString = ` <li class="list_page_detail" onclick="catchOnclickPageAndSwitch(event)">
            ${i}
            </li>`;
            paginateElement.innerHTML += htmlString;
        }
    })
    .catch(function(error){
        console.log(error);
    })
}