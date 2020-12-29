const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const routes = require('./routes');
const PORT = 5000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('./build'));

app.post('/session', routes.session.create);
app.delete('/session', routes.session.remove);

app.get('/orders/:username', routes.orders.all.read);
app.post('/orders/:username', routes.orders.one.add);
app.put('/orders/:username', routes.orders.all.update);

app.get('/items/', routes.items.all.read);
app.get('/items/categories', routes.items.categories.read);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );
