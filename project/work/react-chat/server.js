const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 4000;

const chat = require('./message');
const { v4: uuidv4 } = require('uuid');

app.use(express.static("./build"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/session', (req, res) => {
    const uid = req.cookies.uid;
    if (!uid) {
        res.status(401).json({ code: 'Please log in.' });
        return;
    }
    if (!chat.users[uid]) {
        res.clearCookie('uid');
        res.status(403).json({ code: 'Your cookie for last time remains, please reload once.' });
        return;
    }
    res.json(chat);
})

app.post('/session', express.json(), (req, res) => {
    const username = req.body.username;
    if (username === '') {
        res.status(403).json({ code: 'Please Input Your Username' });
        return;
    }
    if (username === 'dog') {
        res.status(403).json({ code: 'You should input an appropriate username' });
        return;
    }
    if (Object.values(chat.users).find(user => user.username === username)) {
        res.cookie('uid', Object.values(chat.users).find(user => user.username === username).uid);
        res.json(chat);
    } else {
        const uid = uuidv4();
        chat.users[uid] = {
            'username': username,
            'uid': uid,
        };
        res.cookie('uid', uid);
        res.json(chat);
    };

});

app.delete('/session', express.json(), (req, res) => {
    const uid = req.cookies.uid;
    res.clearCookie('uid');
    res.sendStatus(200);
});


app.post('/sendMessage', express.json(), (req, res) => {
    const text = req.body.message;
    const uid = req.cookies.uid;
    if (text === '') {
        res.status(403).json({ code: 'Please Input Your Message' });
        return;
    }
    if (!chat.users[uid]) {
        res.status(403).json({ code: 'You are not allowed!' });
        return;
    }
    chat.addMessage({ uid, text });
    res.json(chat);
});


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));