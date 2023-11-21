const express = require('express');
const { createServer } = require("node:http");
const bodyParser = require('body-parser')
const conn = require('./config/db');
const ItemController = require('./controllers/itemController')

const app = express();
const server = createServer(app);



server.listen(3000)
console.log('server en http://localhost:3000/')

app.disable('x-powered-by');
app.set('view engine','ejs');
app.use(express.static('views/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());




app.get('/', async (req, res) => {
    try {
        const result = await ItemController.showItem('2022-11-25');
        console.log(result);
        res.render('index',result)

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Error en la solicitud.' });
    }
});

app.post('/item',async(req,res)=>{
    try {
        const date = req.body.search
        console.log(date)
        const result = await ItemController.showItem(date);
        console.log(result);
        res.render('index',result)

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Error en la solicitud.' });
    }
})


  