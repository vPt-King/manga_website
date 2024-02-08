const express = require('express')
const app = express()
const port = 3000
const dataFile = './data.json';
const fs = require('fs'); // Import the file system module

function readData(){
    try {
        const data = fs.readFileSync(dataFile, 'utf8'); // Read file synchronously
        return data;
      } catch (error) {
        console.error('Error reading data.json:', error);
      }
} 
app.get('/', (req, res) => {
    data = readData();
    res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})