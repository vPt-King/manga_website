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
                <h3 class="manga_name">${data.name}</h3>
                <h3>Chương: ${data.chapter}</h3>
                <h3>Lượt xem: ${data.view}</h3>
            </a>
        </li>`;
        mangaElement.innerHTML += html;
        });

        //get page number from url, if page == i then that is the current page, we hightligt the 
        // current page by background color 
        const page = parseInt(url.split("page=")[1]);
        for(let i = 1; i <= numberOfPage;i++)
        {
            let htmlString = '';
            if(page != i){
            htmlString = ` <li class="list_page_detail" onclick="catchOnclickPageAndSwitch(event)">
            ${i}
            </li>`;
            }
            else{
                htmlString = `<li class="list_page_detail" style="background-color: #00a5f0;" onclick="catchOnclickPageAndSwitch(event)">
                ${i}
                </li>`;
            }
            paginateElement.innerHTML += htmlString;
        }
    })
    .catch(function(error){
        console.log(error);
    })
}