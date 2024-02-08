fetch("http://localhost:3000/")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let showManga = document.getElementById("list_manga_detail");
        listData = Object.values(data);
        listData.forEach(data => {
            let html = `<li class="manga">
            <a href="#">
                <img src="${data.img}" alt="">
                <p>${data.name}</p>
                <p>Chương: ${data.chapter}</p>
            </a>
        </li>`;
        showManga.innerHTML += html;
        });
    })
    .catch(function(error){
        console.log(error);
    })
