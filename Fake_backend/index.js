const express = require('express')
const app = express()
const port = 3000
const dataFile = './data.json';
const fs = require('fs'); // Import the file system module
const cors=require("cors");
const corsOptions ={
   origin:'http://127.0.0.1:5500', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
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
app.get('/', (req, res) => {
    data = readData();
    res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})