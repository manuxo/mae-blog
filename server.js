//Dependencies
const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//Init App

const PORT = process.env.PORT || 3000;
const app = express();

//View engine
app.set('views', path.join(__dirname,'public'));
app.set('view engine','ejs');

//Config - CORS
const allowCORS = require('./middleware/cors');
app.use(allowCORS);

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

//Public
app.use(express.static(path.join(__dirname,'public')));

//Routes

app.get('/', (req,res) => {
    res.status(200).render('index',{message:'index works!', tittle:'Inicio'});
});

//Error handling

app.use((err,req,res,next) => {
    if(err.status){
        res.status(err.status).send(err.message);
    }else{
        res.status(500).send();
    }
});

//Server
const server = http.createServer(app);
server.listen(PORT,() => {
    console.log(`Server running at port: ${PORT}`);
});

