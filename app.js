const express = require('express');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';


const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended : false}));


app.get('/', (req,res) => {

    res.render('index');

});

app.listen(PORT, HOST, () => console.log(`Listening on port ${PORT} on ${HOST}`));