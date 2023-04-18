const express = require('express')
const app = express();
const port = 5000;
const cors = require('cors')

const category = require('./data/category.json')
app.use(cors())
app.get('/', (req, res)=>{
    res.send('Dragon is running!!')
})
app.get('/category', (req, res)=>{
    res.send(category)
})


app.listen(port, ()=>{
    console.log(`Dragon news is running on port: ${port}`);
})