//backend web server
//express & bodyParser(this handles req.body)
const express = require('express');
const ctrl = require('./controllers/Controller');
const bodyParser  =  require('body-parser');

const app = express();

app.use(bodyParser.json());



//endpoints go here.. my gets pots puts

app.get('/api/getWish', ctrl.wishGetter)

app.post('/api/addWish', ctrl.wishAdder)

app.delete('/api/deleteWish/:id', ctrl.deleteWish)

app.put('/api/changeWish/:id', ctrl.changeWish )





//listen for request on port
const PORT=3030;
app.listen (PORT, ()=> {
    console.log('listening on port:'+ PORT)});
//run nodemon point it at index.js
