const express = require('express');
const { createServer } = require("node:http");
const bodyParser = require('body-parser')
const conn = require('./config/db');

const app = express();
const server = createServer(app);

conn.connect((err)=>{
    if(err){
        console.log("error al conectar db") 
    }else{
        server.listen(3000)
        console.log('server en http://localhost:3000/')
    }
});

app.disable('x-powered-by');
app.set('view engine','ejs');
app.use(express.static('views/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index')
});