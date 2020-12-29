const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const dataBase = require("./public/storage.js");


const items = {};

  dataBase.forEach(x =>  
    items[x.id]=x
    );

app.use(express.static('./public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    const sid = req.cookies.sid;
    if(!sid) {
        res.status(401);
    }
    res.sendFile(__dirname + './public/index.html');
})

app.post('/session', (req,res) => {
    const userName = req.body.userId[0];
      if(userName.includes("dog") || userName.length === 0 || userName.includes(" ")){
    res.status(401).send("bad login info");
  }
  else{
    res.cookie('sid', userName, {maxAge: 300000});
    userData = userName;
    res.redirect('/');
  }
})

app.get('/session', (req, res)=>{
    res.clearCookie('sid');
    res.redirect('/');
  });

app.get('/items/', (req,res) => {
    res.json(items);
})


app.post('/items/', express.json(), (req, res) => {
    const id = req.body.id;
    const name = req.body.name;

    if(!name) {
        res.status(400).json({ error: "missing-name"});
    }  else if(items[name]) {
        res.status(409).json({ error: "duplicate"});
    } else {
        items[id] = req.body;
        res.sendStatus(200);
    }
});

app.patch('/items/:id', express.json(), (req, res) => {



    const itemId = req.params.id;
    const newQuantity = req.body.quantity;
    console.log(itemId);
    
    console.log('new value ' + newQuantity);

    if(!itemId) {
        res.status(400).json({ error: "missing-name"});
    } else {
        items[itemId].quantity = newQuantity;
        res.sendStatus(200);
    }
}
)



app.delete('/items/:id', express.json(), (req, res) => {
    const itemId = req.params.id;
    console.log(itemId);
    if(!itemId) {
        res.status(400).json({ error: "missing-name"});
    } else {
        delete items[itemId]; 
        res.sendStatus(200);
    }
});

module.exports = items;
app.listen( PORT, () => console.log(`http://localhost:${PORT}`));