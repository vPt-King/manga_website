const express = require('express')
const app = express()
const port = 3000
const dataFile = './data.json';
const dataCategoryFile = './category.json';
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})