$(function () {
    $("#paginate").load("../html/templates/paginate.html"); 
})


// load paginate and manga when click switch page
function myFunction(event){
    let page = parseInt(event.target.textContent);
    fetch(`http://localhost:3000/?page=${page}`)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let showManga = document.getElementById("list_manga_detail");
        showManga.innerHTML = "";
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
        showManga.innerHTML += html;
        });

        let paginatePage = document.getElementById("paginate_show");
        paginatePage.innerHTML = "";
        for(let i = 1; i <= numberOfPage;i++)
        {
            let htmlString = ` <li class="list_page_detail" onclick="myFunction(event)">
            ${i}
            </li>`;
            paginatePage.innerHTML += htmlString;
        }
    })
    .catch(function(error){
        console.log(error);
    })
}



