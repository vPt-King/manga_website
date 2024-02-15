const express = require('express')
const app = express()
const port = 3000
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

function numberOfPage(numberOfManga) {
  let ketQua = numberOfManga / 25;
  if (Number.isInteger(ketQua)) {
    return ketQua;
  } else {
    return Math.ceil(ketQua);
  }
}
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
// return category list
app.get('/category', (req, res) => {
  categories = Object.values(JSON.parse(readCategoryData()));
  res.send(JSON.stringify(categories));
})

// cần trả về số trang, số lượng trang từ đâu đến đâu, query số lượng truyện từ đâu đến đâu
app.get('/', (req, res) => {
    const page = parseInt(req.query.page);
    lastIdManga= page*25;
    firstIdManaga = lastIdManga - 24;
    mangas = Object.values(JSON.parse(readData()));
    pageNumber = numberOfPage(mangas.length);
    const filteredMangas = mangas.filter(manga => parseInt(manga.id) >= firstIdManaga && parseInt(manga.id) <= lastIdManga);
    returnedData = {
      numberOfPage: pageNumber,
      mangas: filteredMangas
    }
    res.send(JSON.stringify(returnedData));
})

app.get('/listMangaOfCategory', (req, res) => {
    const category = req.query.category;
    const page = parseInt(req.query.page);
    lastCountedManga= page*25;
    firstCountedManaga = lastCountedManga - 24;
    mangas = Object.values(JSON.parse(readData()));
    const filteredMangas = mangas.filter(manga => manga.category == category);
    
    pageNumber = numberOfPage(filteredMangas.length);
    let returnedManga = [];
    for(i = firstCountedManaga; i <= lastCountedManga;i++)
    {
      if(filteredMangas[i]){
      returnedManga.push(filteredMangas[i]);
      }
      else{
        break;
      }
    }
    returnedData = {
      numberOfPage: pageNumber,
      mangas: returnedManga
    }
    return res.send(JSON.stringify(returnedData));
})

app.get('/hotManga', (req, res) => {
  const page = parseInt(req.query.page);
  lastCountedManga= page*25;
  firstCountedManaga = lastCountedManga - 24;
  mangas = Object.values(JSON.parse(readData()));
  pageNumber = numberOfPage(mangas.length);
  mangas.sort((a, b) => {
    return b.view - a.view;
  });
  let filteredMangas = [];
    for(i = firstCountedManaga; i <= lastCountedManga;i++)
    {
      if(mangas[i]){
        filteredMangas.push(mangas[i]);
      }
      else{
        break;
      }
    }
  returnedData = {
    numberOfPage: pageNumber,
    mangas: filteredMangas
  }
  console.log(returnedData);
  res.send(JSON.stringify(returnedData));
})


app.get('/author', (req, res) => {
  authors = Object.values(JSON.parse(readAuthorData()));
  res.send(JSON.stringify(authors));
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})