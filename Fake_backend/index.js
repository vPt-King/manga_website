const express = require('express')
const app = express();
const port = 3000;
const dataFile = './data.json';
const dataCategoryFile = './category.json';
const dataAuthorFile = './author.json';
const fs = require('fs'); // Import the file system module
const cors=require("cors");
const corsOptions ={
   origin:'http://127.0.0.1:5500', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.use(cors(corsOptions)) // Use this after the variable declaration

function readData(){
    try {
        const data = fs.readFileSync(dataFile, 'utf8'); // Read file synchronously
        return data;
      } catch (error) {
        console.error('Error reading data.json:', error);
      }
} 

function readCategoryData(){
  try {
      const data = fs.readFileSync(dataCategoryFile, 'utf8'); // Read file synchronously
      return data;
    } catch (error) {
      console.error('Error reading data.json:', error);
    }
} 

function readAuthorData(){
  try {
      const data = fs.readFileSync(dataAuthorFile, 'utf8'); // Read file synchronously
      return data;
    } catch (error) {
      console.error('Error reading data.json:', error);
    }
} 

function isAllElementsOfBInA(A, B) {
  const setA = new Set(A);
  for (const element of B) {
    if (!setA.has(element)) {
      return false;
    }
  }
  return true;
}

// return category list
app.get('/category', (req, res) => {
  categories = Object.values(JSON.parse(readCategoryData()));
  res.send(JSON.stringify(categories));
})

// cần trả về số trang, số lượng trang từ đâu đến đâu, query số lượng truyện từ đâu đến đâu
app.get('/', (req, res) => {
    mangas = Object.values(JSON.parse(readData()));
    res.send(JSON.stringify(mangas));
})

app.get('/listMangaOfCategory', (req, res) => {
    let category = req.query.category;
    const categories = category.split("_");
    mangas = Object.values(JSON.parse(readData()));
    const filteredMangas = mangas.filter(manga =>{
      const arr = manga.category.split(",");
      return isAllElementsOfBInA(arr,categories);
    });
    console.log(filteredMangas);
    return res.send(JSON.stringify(filteredMangas));
})

app.get('/hotManga', (req, res) => {
  mangas = Object.values(JSON.parse(readData()));
  mangas.sort((a, b) => {
    return b.view - a.view;
  });
  res.send(JSON.stringify(mangas));
})


app.get('/author', (req, res) => {
  authors = Object.values(JSON.parse(readAuthorData()));
  res.send(JSON.stringify(authors));
})



app.get('/listMangaOfAuthor', (req, res) => {
  const author = req.query.author;
  let mangas = Object.values(JSON.parse(readData()));
  let filterMangas = mangas.filter((manga) => {
    return manga.author.replace(/\.|\s/g, "_").toLowerCase().includes(author.toLowerCase())
  });
  console.log(filterMangas);
  res.send(JSON.stringify(filterMangas));
})

app.post('/search-manga-by-name',(req,res)=>{
  const name = req.body.name;
  let mangas = Object.values(JSON.parse(readData()));
  let filterMangas = mangas.filter((manga) => {
    return manga.name.toLowerCase().includes(name);
  });
  res.send(JSON.stringify(filterMangas));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})