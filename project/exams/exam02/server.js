const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const recipes = require('./recipes');
const { v4: uuidv4 } = require('uuid');

app.use(cookieParser());
app.use(express.static('./public'));

app.get('/session', (req, res) => {
    const uid = req.cookies.uid;
    if (!uid) {
        res.status(401).json({ code: 'Please log in.' });
        return;
    }
    if (!recipes.users[uid]) { 
        res.clearCookie('uid'); 
        res.status(403).json({ code: 'Your username is not allowed, please try another one.' });
        return;
    }
    res.sendStatus(200);
})

app.post('/session', express.json(), (req, res) => {
    const username = req.body.username; 
    if (username === 'dog') { 
        res.status(403).json({ code: 'You should input an appropriate username' });
        return;
    }
    const uid = uuidv4();
    recipes.users[uid] = { username };
    const list = recipes.lists;
    res.cookie('uid', uid);
    res.json(list);

});

app.post('/session/logout', express.json(), (req, res) => {
    res.clearCookie('uid');
    res.sendStatus(200);
});

app.get('/recipes', express.json(), (req, res) => {
    const list = recipes.lists;
    res.json(list);
});

app.post('/recipes', express.json(), (req, res) => {
    const uid = req.cookies.uid;
    if (!uid || !recipes.users[uid]) {
        res.clearCookie('uid');
        res.status(401).json({ code: 'Your cookie is overdue, please try again.' });
        return;
    }

    const recipeId = req.body.recipe.recipeId;
    recipes.lists[recipeId] = req.body.recipe.newRecipeDetails;
    recipes.lists[recipeId].author = recipes.users[uid].username;
    res.json(recipes.lists);
})

app.get('/recipes/:id', express.json(), (req, res) => {
    const recipeId = req.params.id;
    const recipe = recipes.lists[recipeId];
    res.json(recipe);
})


app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
