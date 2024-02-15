let authorArea=document.getElementById("list_author_detail");
let paginateArea = document.getElementById("paginate_show");
let authors = null;
authorArea.innerHTML="";
fetch("http://localhost:3000/author?page=1")
.then(function(response){
    return response.json();
})
.then(function(data){
    authors = Object.values(data);
    for(let i = 0; i < authors.length - 1;i++)
    {
        for(let j = i+1 ; j < authors.length;j++)
        {
            if(authors[i].name.toLowerCase() > authors[j].name.toLowerCase()){
                let tmp = authors[i];
                authors[i] = authors[j];
                authors[j] = tmp;
            }
        }
    }
    authors.forEach(data => {
        let html = `<li class="author">
        <a href="#" class="show_author_name">
            <h3>${data.name}</h3>
        </a>
    </li>`;
    authorArea.innerHTML += html;
    });
})


function showAuthorBeginWithLette(event){
    let letter = event.target.textContent;
    authorArea.innerHTML="";
    let filterAuthors = authors.filter(author => author.name[0].toLowerCase() == letter);
    filterAuthors.forEach(data => {
        let html = `<li class="author">
        <a href="#" class="show_author_name">
            <h3>${data.name}</h3>
        </a>
    </li>`;
    authorArea.innerHTML += html;
    });
}